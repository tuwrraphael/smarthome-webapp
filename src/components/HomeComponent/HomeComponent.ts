import template from "./HomeComponent.html";
import "./HomeComponent.scss";

export class HomeComponent extends HTMLElement {
    private abortContoller: AbortController;
    private googleAccessToken: string;
    private particleToken: { token: string, exp: number };
    private inProgress = false;
    private lastValue: number;
    private maxVolume: number;
    private middleValue: number;

    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {
        this.abortContoller = new AbortController();
        let volumeSlider = <HTMLInputElement>this.querySelector("#volume-slider");
        volumeSlider.addEventListener("input", () => this.volumeInput(), <any>{ signal: this.abortContoller.signal });
        volumeSlider.addEventListener("change", () => this.volumeChanged(), <any>{ signal: this.abortContoller.signal });
        this.maxVolume = parseInt(volumeSlider.max);
        this.middleValue = this.maxVolume / 2;

        this.querySelector("#quelleAlexa").addEventListener("click", () => this.quelleAlexaClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#quelleMonitor").addEventListener("click", () => this.quelleMonitorClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#toggleDBFB").addEventListener("click", () => this.toggleDBFBClick(), <any>{ signal: this.abortContoller.signal });
        this.updateProgress(false);
        import("@polymer/paper-spinner/paper-spinner").catch(err => { console.error("error loading spinner", err); });
        document.addEventListener("keypress", async (e: KeyboardEvent) => {
            if (e.key === "+") {
                await this.executeParticleFunction("control", "i1");
            } else if (e.key === "-") {
                await this.executeParticleFunction("control", "d1");
            }
        }, <any>{ signal: this.abortContoller.signal });
    }
    volumeInput(): void {
        this.lastValue = parseInt((<HTMLInputElement>this.querySelector("#volume-slider")).value);
    }

    setGoogleAccessToken(accessToken: string) {
        this.googleAccessToken = accessToken;
    }

    updateProgress(b: boolean) {
        this.inProgress = b;
        let div: HTMLDivElement = this.querySelector("#progress");
        this.querySelectorAll("button").forEach(d => b ? d.setAttribute("disabled", "disabled") : d.removeAttribute("disabled"));
        if (b) {
            this.querySelector("#volume-slider").setAttribute("disabled", "disabled");
        } else {
            this.querySelector("#volume-slider").removeAttribute("disabled");
        }
        div.style.display = b ? "" : "none";
    }

    private async executeParticleFunction(fnName: string, arg: string) {
        console.log(fnName, arg);
        try {
            if (this.inProgress) {
                return;
            }
            this.updateProgress(true);
            let token = await this.getParticleToken();
            let body = new URLSearchParams();
            body.set("arg", arg);
            await fetch(`https://api.particle.io/v1/devices/4e0033000651343530343432/${fnName}`, {
                method: "POST",
                body: body,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
        }
        finally {
            this.updateProgress(false);
        }
    }

    async volumeChanged() {
        if (this.lastValue < this.middleValue) {
            await this.executeParticleFunction("control", `d${this.middleValue - this.lastValue}`);
        } else if (this.lastValue > this.middleValue) {
            await this.executeParticleFunction("control", `i${this.lastValue - this.middleValue}`);
        }
        (<HTMLInputElement>this.querySelector("#volume-slider")).value = `${this.middleValue}`;
    }

    async quelleAlexaClick() {
        await this.executeParticleFunction("control", "v");
    }

    async quelleMonitorClick() {
        await this.executeParticleFunction("control", "c");
    }

    async toggleDBFBClick() {
        await this.executeParticleFunction("control", "b");
    }

    disconnectedCallback() {
        this.abortContoller.abort();
    }

    private async getParticleToken() {
        if (this.particleToken != null && (+ new Date()) < this.particleToken.exp) {
            return this.particleToken.token;
        }
        let body = new URLSearchParams();
        body.set("grant_type", "urn:ietf:params:oauth:grant-type:token-exchange");
        body.set("subject_token", this.googleAccessToken);
        body.set("subject_token_type", "urn:ietf:params:oauth:token-type:access_token")
        let exchangeRes = await fetch("https://particle-google-auth-bridge.grapp.workers.dev/token", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        if (!exchangeRes.ok) {
            throw new Error(`Could not acquire particle token: Status: ${exchangeRes.status}`);
        }
        let tokenResponse = await exchangeRes.json();
        let exp = +(new Date) + parseInt(tokenResponse.expires_in) * 1000
        this.particleToken = {
            exp: exp,
            token: tokenResponse.access_token
        };
        return this.particleToken.token;
    }
}

customElements.define("home-component", HomeComponent);

import template from "./HomeComponent.html";
import "./HomeComponent.scss";

export class HomeComponent extends HTMLElement {
    private abortContoller: AbortController;
    private googleAccessToken: string;
    private particleToken: { token: string, exp: number };
    private inProgress = false;

    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {
        this.abortContoller = new AbortController();
        this.querySelector("#lauter").addEventListener("click", () => this.lauterClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#leiser").addEventListener("click", () => this.leiserClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#quelleAlexa").addEventListener("click", () => this.quelleAlexaClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#quelleMonitor").addEventListener("click", () => this.quelleMonitorClick(), <any>{ signal: this.abortContoller.signal });
        this.querySelector("#toggleDBFB").addEventListener("click", () => this.toggleDBFBClick(), <any>{ signal: this.abortContoller.signal });
        this.updateProgress(false);
        import("@polymer/paper-spinner/paper-spinner").catch(err => { console.error("error loading spinner", err); });
    }

    setGoogleAccessToken(accessToken: string) {
        this.googleAccessToken = accessToken;
    }

    updateProgress(b: boolean) {
        this.inProgress = b;
        let div: HTMLDivElement = this.querySelector("#progress");
        this.querySelectorAll("button").forEach(d => b ? d.setAttribute("disabled", "disabled") : d.removeAttribute("disabled"));
        div.style.display = b ? "" : "none";
    }

    private async executeParticleFunction(fnName: string, arg: string) {
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

    async lauterClick() {
        await this.executeParticleFunction("control", "i");
    }

    async leiserClick() {
        await this.executeParticleFunction("control", "d");
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

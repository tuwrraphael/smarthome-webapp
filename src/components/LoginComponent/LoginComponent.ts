import template from "./LoginComponent.html";
import "./LoginComponent.scss";

function nonce(length: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export class LoginComponent extends HTMLElement {
    private nonceInput: HTMLInputElement;
    private redirectUriInput: HTMLInputElement;
    private loginHintInput: HTMLInputElement;
    private loginForm: HTMLFormElement;

    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {
        this.nonceInput = this.querySelector("#nonce");
        this.redirectUriInput = this.querySelector("#redirect_uri");
        this.redirectUriInput.value = window.location.href.replace(/\/login|(\?.+)|(\#.+)/g, "").replace(/(\/$)/g, "");
        this.loginHintInput = this.querySelector("#login_hint");
        this.loginForm = this.querySelector("#login_form");
        this.nonceInput.value = nonce(8);
        if ("FederatedCredential" in window) {
            navigator.credentials.get({
                federated: {
                    providers: [
                        "https://google.smarthome-app.kesal.at"
                    ]
                },
                mediation: "optional"
            }).then(c => {
                if (c && c.type == "federated") {
                    this.loginHintInput.value = c.id;
                    this.loginForm.submit();
                }
            });
        }
    }

    disconnectedCallback() {

    }
}

customElements.define("login-component", LoginComponent);

import "./styles.scss";
import { ContainerRouteRenderer, Router } from "route-it";
import { AsyncRouteResolver } from "route-it/dist/router";
import { LoginComponent } from "./components/LoginComponent/LoginComponent";
import { HomeComponent } from "./components/HomeComponent/HomeComponent";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        navigator.serviceWorker.register("./sw.js").then(registration => {
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

async function getAccessToken() {
    const sessionStorageKey = "smarthome-webapp-token";
    let sessionToken = sessionStorage.getItem(sessionStorageKey);
    if (null != sessionToken) {
        let parsed: { access_token: string, exp: number } = JSON.parse(sessionToken);
        if (parsed.exp > +new Date()) {
            return parsed;
        }
    }
    let searchParameters = new URLSearchParams(window.location.hash.replace(/^#/, ""))
    let tokenFromUrl = searchParameters.get("access_token");
    if (tokenFromUrl) {
        history.replaceState(null, null, " ");
        let res = await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${tokenFromUrl}`);
        if (!res.ok) {
            throw new Error(`access token validation resulted in ${res.status}`);
        }
        let exp = +(new Date) + parseInt(searchParameters.get("expires_in")) * 1000;
        let token = {
            access_token: tokenFromUrl,
            exp: exp
        };
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(token));
        if ("FederatedCredential" in window) {
            let body = (await res.json());
            var cred = await navigator.credentials.create({
                federated: {
                    id: body.sub,
                    provider: "https://accounts.google.com"
                }
            });
            await navigator.credentials.store(cred);
        }
        return token;
    }
    return null;
}

async function run() {
    let accessToken = await getAccessToken();

    class AppRouteResolver implements AsyncRouteResolver<HTMLElement> {
        async resolve(lastRoute: string, currentRoute: string, router: Router<any>): Promise<false | HTMLElement> {
            switch (currentRoute) {
                case "login":
                    return new LoginComponent();
                default:
                    let c = new HomeComponent();
                    c.setGoogleAccessToken(accessToken.access_token);
                    return c;
            }
        }
    }

    let router = new Router<HTMLElement>(new AppRouteResolver(), new ContainerRouteRenderer(document.getElementById("content")));
    router.run();
    if (!accessToken) {
        router.navigate("login", "Login", true);
    } else {
        setTimeout(() => {
            window.location.reload();
        }, (accessToken.exp - 1000) - +new Date());
    }
}
run().catch(err => console.error(err));
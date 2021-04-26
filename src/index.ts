import Download from "./pages/Download.svelte";
import Index from "./pages/Index.svelte";
import type { SvelteComponent } from "svelte";

const pages = {
    nothing: () => null,
    index: () =>
        new Index({
            target: document.getElementById("root") as HTMLElement,
        }),
    download: () =>
        new Download({
            target: document.getElementById("root") as HTMLElement,
        }),
};

let currentElement: SvelteComponent | null = null;
let currentPageName = "";
function render() {
    let nextPage: keyof typeof pages;
    if (location.pathname === "/") {
        if (location.hash.startsWith("#") && location.hash.length === 8) {
            nextPage = "download";
        } else {
            location.hash = "";
            nextPage = "index";
        }
    } else {
        location.replace("/");
        nextPage = "nothing";
    }
    if (currentPageName !== nextPage) {
        currentElement && currentElement.$destroy();
        currentElement = pages[nextPage]();
        currentPageName = nextPage;
    }
}

window.addEventListener("hashchange", render);
render();

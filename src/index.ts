import Index from "./pages/Index.svelte";

if (location.pathname === "/") {
    new Index({
        target: document.getElementById("root") as HTMLElement,
    });
} else {
    location.replace("/");
}

export {};

import { readable, Writable, Updater } from "svelte/store";

const hash = readable(location.hash.substr(1), set => {
    const listener = () => set(location.hash.substr(1));

    window.addEventListener("hashchange", listener);
    return () => window.removeEventListener("hashchange", listener);
});
export default {
    ...hash,
    set(value: string) {
        location.hash = value;
    },
    update(updater: Updater<string>) {
        location.hash = updater(location.hash);
    },
} as Writable<String>;

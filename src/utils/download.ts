export default function download(url: string, onLoad?: (ok: boolean) => void) {
    const downloadIframe = document.createElement("iframe");
    downloadIframe.style.display = "none";
    downloadIframe.src = url;

    onLoad &&
        setTimeout(() => {
            onLoad(true);
        }, 1000);

    document.body.appendChild(downloadIframe);
}

export default function getCharacterWidth(element: HTMLElement): number | null {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return null;
    context.font =
        window.getComputedStyle(element).fontSize +
        " " +
        window.getComputedStyle(element).fontFamily;
    const width = context.measureText("~").width;
    canvas.remove();
    return width;
}

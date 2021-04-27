<script lang="ts">
    export let text: string | null = null;
    let textContainer: HTMLDivElement;
    let copiedText: boolean = false;
</script>

<div
    class="absolute inset-x-12 bottom-0 h-11
    transform translate-y-full overflow-hidden
    {text == null
    ? 'invisible'
    : ''}
    "
>
    <div
        class="absolute inset-0 rounded-b transform-gpu bg-white
        transition-transform duration-200 ease-in-out text-black
        flex justify-center items-center
        {text ==null
        ? '-translate-y-full'
        : ''}
        "
        on:click={() => {
            const sel = window.getSelection();
            sel && sel.removeAllRanges();

            const range = document.createRange();
            range.selectNodeContents(textContainer);
            sel && sel.addRange(range);
            document.execCommand("copy");
            sel && sel.removeRange(range);

            copiedText = true;
            setTimeout(() => {copiedText = false}, 2000);
        }}
    >
        <p bind:this={textContainer}>{copiedText ? "Copied !" : text}</p>
    </div>
</div>

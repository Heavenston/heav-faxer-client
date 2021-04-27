<script lang="ts">
    import { onMount } from "svelte"
    import getCharacterWidth from "../utils/getCharacterWidth"

    let container: HTMLDivElement;
    
    export let shape: string = "";
    export let content: string = "";
    export let charaterWidth: number = 6;

    $: amountOfSpacesBetweenRepetitions = Math.ceil(shape.length / 4);

    let currentRotation: number = 0;
    $: shouldRotate = shape.length < content.length;
    let displayedContent: string;
    $: if (shouldRotate) {
        let spaces = '';
        for (let i = 0; i < amountOfSpacesBetweenRepetitions; i++)
            spaces += ' ';
        displayedContent =
             (content + spaces).substring(currentRotation, shape.length + currentRotation)
            + content.substring(0, currentRotation - (content.length - shape.length) - amountOfSpacesBetweenRepetitions)
            ;
    }
    else {
        displayedContent = content;
    }

    let currentInterval: NodeJS.Timeout | null = null;
    $: if (shouldRotate && currentInterval === null) {
        currentInterval = setInterval(() => {
            currentRotation++;
            
            if (currentRotation > (content.length + amountOfSpacesBetweenRepetitions))
                currentRotation = 0;
        }, 250);
    } else if (!shouldRotate && currentInterval !== null) {
        clearInterval(currentInterval);
        currentRotation = 0;
        currentInterval = null;
    }

    onMount(() => {
        charaterWidth = container !== null ? (getCharacterWidth(container) ?? 6) : 6;
    });
</script>

<span class="relative font-DSEG14 inline-block" bind:this={container}>
    <div class="opacity-10 select-none">
        {shape.replaceAll("X", "~")}
    </div>
    <div class="absolute inset-0 font-semibold whitespace-nowrap">
        {#each displayedContent.split(" ") as word, i}
            {#if i != 0}<span class="inline-block w-cw h-1">&nbsp;</span>{/if}{word}
        {/each}
    </div>
</span>

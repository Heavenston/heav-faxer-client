<script lang="ts">
    export let shape: string = "";
    export let content: string = "";
</script>

<span class="relative font-DSEG7 inline-block">
    <div class="opacity-10 select-none">
        {shape.replaceAll("X", "8")}
    </div>
    <div class="absolute inset-0 font-semibold">
        {#each content.split(" ") as word, i}{#if i != 0}<span
                    class="inline-block w-cw h-1"
                />{/if}{word}{/each}
    </div>
</span>

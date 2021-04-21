<script lang="ts">
    export let shape: string = "";
    export let content: string = "";
</script>

<span class="relative font-DSEG14 inline-block">
    <div class="opacity-10 select-none">
        {shape.replaceAll("X", "~")}
    </div>
    <div class="absolute inset-0 font-semibold">
        {#each content.split(" ") as word, i}{#if i != 0}<span
                    class="inline-block w-cw h-1"
                />{/if}{word}{/each}
    </div>
</span>

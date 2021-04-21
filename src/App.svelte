<script lang="ts">
    import Button from "./components/Button.svelte";
    import { fly } from "svelte/transition";
    let fileform: HTMLInputElement | null = null;
    let files = "";
    let fileHistory = [];
</script>

<div
    class="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
>
    <div class="px-10 py-7 min-w-96 bg-gray-700 shadow-xl rounded">
        <div>
            <div
                class="relative w-full rounded-full h-3 bg-gray-900 shadow-inner"
            >
                {#if files !== ""}
                    {#key files}
                        <div
                            class="absolute inset-x-2 bottom-0 overflow-hidden duration-300"
                        >
                            <div
                                transition:fly={{ y: -500, duration: 500 }}
                                class="bg-white text-black rounded-t-sm
                                transition-transform transform ease-in-out duration-300
                                select-none font-semibold break-words
                                h-80 p-2 px-3 relative -bottom-40
                                "
                            >
                                Selected file: {files.substr(12)}
                            </div>
                        </div>
                    {/key}
                {/if}
            </div>
        </div>
        <div class="pt-10">
            <input
                type="file"
                class="cantseetheinput"
                bind:this={fileform}
                bind:value={files}
            />
            <Button
                on:click={() => {
                    fileform?.click();
                }}
            >
                Select file
            </Button>
        </div>
    </div>
</div>

<style>
    .cantseetheinput {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
</style>

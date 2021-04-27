<script lang="ts">
    import { fly } from "svelte/transition";
    export let text: string = "";
    export let uploadProgress: number | null = null;
    let windowHeight: number;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class="relative mx-8 rounded-t-lg h-8 bg-gray-900 shadow-inner z-0">
    {#if text !== ""}
        {#key text}
            <div
                class="absolute inset-x-4 bottom-0 overflow-hidden duration-300"
            >
                <div
                    in:fly={{
                        y: -windowHeight / 2,
                        duration: 500,
                    }}
                    out:fly={{
                        y: 500,
                        opacity: 1,
                        duration: 3000,
                    }}
                    class="bg-white text-black rounded-sm
                            transition-transform transform-gpu ease-linear duration-100
                            select-none font-semibold break-words
                            h-80 p-2 px-3 relative -bottom-52
                            "
                    style={uploadProgress !== null
                        ? `--tw-translate-y: calc(${
                              uploadProgress / 100
                          } * 7rem);`
                        : ``}
                >
                    {text}
                </div>
            </div>
        {/key}
    {/if}
</div>

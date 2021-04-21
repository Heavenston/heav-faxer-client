<script lang="ts">
    import Button from "./components/Button.svelte";
    import SegDisp from "./components/SegmentedDisplay.svelte";
    import { fly } from "svelte/transition";
    let windowHeight: number;
    let fileform: HTMLInputElement | null = null;
    let files = "";
    let uploadState: null | number = null;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
    class="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
>
    <input
        type="file"
        class="cantseetheinput"
        bind:this={fileform}
        bind:value={files}
    />
    <div class="relative px-5 py-3 bg-gray-700 shadow-xl rounded">
        <div
            class="absolute bottom-full inset-x-8 rounded-t-lg h-8 bg-gray-900 shadow-inner"
        >
            {#if files !== ""}
                {#key files}
                    <div
                        class="absolute inset-x-4 bottom-0 overflow-hidden duration-300"
                    >
                        <div
                            transition:fly={{
                                y: -windowHeight / 2,
                                duration: 500,
                            }}
                            class="bg-white text-black rounded-sm
                            transition-transform transform-gpu ease-linear duration-100
                            select-none font-semibold break-words
                            h-80 p-2 px-3 relative -bottom-40
                            "
                            style={uploadState !== null
                                ? `--tw-translate-y: calc(${
                                      uploadState / 100
                                  } * 10rem);`
                                : ``}
                        >
                            Selected file: {files.substr(12)}
                        </div>
                    </div>
                {/key}
            {/if}
        </div>
        <div class="bg-gray-800 rounded w-full px-3 py-1">
            <SegDisp
                shape="XXXXXXXXXXXXXXXXXXXXXX"
                content={files == ""
                    ? "Select a file"
                    : uploadState == null
                    ? "Press upload"
                    : `${uploadState < 100 ? "0" : ""}${
                          uploadState < 10 ? "0" : ""
                      }${Math.trunc(uploadState)}%`}
            />
        </div>
        <div class="pt-7 flex">
            <Button
                disabled={files == "" || uploadState !== null}
                on:click={() => {
                    uploadState = 0;
                    let i = setInterval(() => {
                        if (uploadState != null) uploadState += 1;
                        if (uploadState && uploadState >= 100) {
                            clearInterval(i);
                        }
                    }, 100);
                }}>Upload</Button
            >
            <div class="flex-grow" />
            <Button
                disabled={uploadState !== null}
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

<script lang="ts">
    import Button from "./components/Button.svelte";
    import SegDisp from "./components/SegmentedDisplay.svelte";
    import { fly } from "svelte/transition";
    let windowHeight: number;
    let fileform: HTMLInputElement | null = null;
    let files: string = "";
    let uploadState: null | number = null;
    let finalCode: null | string = null;
    function startFileUpload() {
        finalCode = null;
        if (!fileform || !fileform.files) return;
        var formdata = new FormData();
        let file = fileform.files[0];
        formdata.append("file", file, file.name);
        var ajax = new XMLHttpRequest();
        uploadState = 0;
        ajax.upload.addEventListener(
            "progress",
            event => {
                uploadState = (event.loaded / event.total) * 100;
            },
            false
        );
        ajax.addEventListener(
            "load",
            () => {
                files = "";
                uploadState = null;
                finalCode = JSON.parse(ajax.response).files.file;
            },
            false
        );
        ajax.addEventListener("error", () => {}, false);
        ajax.addEventListener("abort", () => {}, false);
        ajax.open("POST", "https://api.faxer.heav.fr/upload");
        ajax.send(formdata);
    }
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
    <div class="pt-14 relative">
        <div
            class="relative mx-8 rounded-t-lg h-8 bg-gray-900 shadow-inner z-0"
        >
            {#if files !== ""}
                {#key files}
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
                            style={uploadState !== null
                                ? `--tw-translate-y: calc(${
                                      uploadState / 100
                                  } * 7rem);`
                                : ``}
                        >
                            Selected file: {files.substr(12)}
                        </div>
                    </div>
                {/key}
            {/if}
        </div>
        <div class="px-5 py-3 bg-gray-700 shadow-xl rounded relative">
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
                        startFileUpload();
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
        <div
            class="absolute inset-x-12 bottom-0 h-9 transform translate-y-full overflow-hidden {finalCode ==
            null
                ? 'invisible'
                : ''}"
        >
            <div
                class="
                absolute bottom-0 inset-0 rounded-b transform-gpu bg-white
                transition-transform duration-200 ease-in-out text-black
                flex justify-center items-center
                {finalCode ==
                null
                    ? '-translate-y-full'
                    : ''}
                "
            >
                {window.location.protocol}//{window.location.host}/{finalCode}
            </div>
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

<script lang="ts">
    import Button from "../components/Button.svelte";
    import InputPaper from "../components/InputPaper.svelte";
    import OutputPaper from "../components/OutputPaper.svelte";
    import SegDisp from "../components/SegmentedDisplay.svelte";
    let windowHeight: number;
    let fileform: HTMLInputElement | null = null;
    let files: string = "";
    let uploadState: null | number = null;
    let finalCode: null | string = null;
    function startFileUpload() {
        if (!fileform || !fileform.files) return;
        let file = fileform.files[0];
        fetch(
            `https://api.faxer.heav.fr/uploadUrl?filename=${encodeURIComponent(
                file.name
            )}`,
            { method: "GET" }
        )
            .then(r => r.json())
            .then(body => {
                if (body.type != "success") {
                    throw "PANIC";
                }
                finalCode = null;
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
                        finalCode = body.file_id;
                    },
                    false
                );
                ajax.addEventListener("error", () => {}, false);
                ajax.addEventListener("abort", () => {}, false);
                ajax.open("PUT", body.url);
                ajax.setRequestHeader(
                    "Content-Type",
                    "application/octet-stream"
                );
                ajax.setRequestHeader(
                    "Content-Disposition",
                    `attachment; filename="${file.name}"`
                );
                file.arrayBuffer().then(b => {
                    ajax.send(b);
                });
            });
    }
</script>

<svelte:window bind:innerHeight={windowHeight} />

<!-- Center the whole app as well as adding background etc -->
<div
    class="absolute inset-0 flex justify-center
    items-center bg-gray-800 text-white text-xl"
>
    <!-- Hidden file input -->
    <input
        type="file"
        class="cantseetheinput"
        bind:this={fileform}
        bind:value={files}
    />
    <!-- Container for the main frame as well as contained papers -->
    <div class="pt-14 relative">
        <!-- Top upload paper -->
        <InputPaper text={files.substr(12)} />
        <!-- Main frame -->
        <div class="px-5 py-3 bg-gray-700 shadow-xl rounded relative">
            <!-- Display container -->
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
            <!-- Buttons container -->
            <div class="pt-7 flex">
                <div>
                    <Button
                        disabled={files == "" || uploadState !== null}
                        on:click={() => {
                            startFileUpload();
                        }}>Upload</Button
                    >
                </div>
                <div class="flex-grow" />
                <div>
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
        <!-- Bottom uploaded url paper -->
        <OutputPaper
            text={finalCode
                ? `${window.location.protocol}//${window.location.host}/#${finalCode}`
                : null}
        />
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

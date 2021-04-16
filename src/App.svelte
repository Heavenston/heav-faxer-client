<script lang="ts">
    import Button from "./components/Button.svelte";
    import Paper from "./components/Paper.svelte";
    let fileform: HTMLInputElement | null = null;
    let files = "";
</script>

<div
    class="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
>
    <div class="px-10 py-7 min-w-96 bg-gray-700 shadow-lg rounded">
        <div>
            <div
                class="relative w-full rounded-full h-3 bg-gray-900 shadow-inner"
            >
                <Paper show={files === ""} delay={300}>
                    Click or drag a file to upload
                    <input
                        type="file"
                        name="files[]"
                        class="absolute inset-0 opacity-0 cursor-pointer"
                        bind:value={files}
                        bind:this={fileform}
                    />
                </Paper>
                <Paper
                    show={files !== ""}
                    extendClass="break-words"
                    delay={300}
                >
                    Selected file: {files.substr(12)}
                </Paper>
            </div>
        </div>
        <div class="pt-10">
            <Button
                disabled={files === ""}
                on:click={() => {
                    if (fileform !== null) fileform.value = "";
                    files = "";
                }}>Reset file</Button
            >
        </div>
    </div>
</div>

<script lang="ts">
    import Button from "./components/Button.svelte";
    let isReleased = true;
</script>

<div
    class="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
>
    <div class="px-10 py-7 min-w-96 bg-gray-700 shadow-lg rounded">
        <div>
            <div
                class="relative w-full rounded-full h-3 bg-gray-900 shadow-inner"
            >
                <div class="absolute h-40 inset-x-2 bottom-0 overflow-hidden">
                    <div
                        class="h-40 bg-white text-black p-2 px-3 rounded-t-sm
                        transition-transform transform duration-1000 ease-linear
                        select-none relative font-typewriter
                        {isReleased
                            ? ''
                            : 'translate-y-44'}"
                    >
                        Click or drag a file to upload
                        <input
                            type="file"
                            name="files[]"
                            class="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <Button
                on:click={() => {
                    isReleased = !isReleased;
                }}
            >
                Hi
            </Button>
        </div>
    </div>
</div>

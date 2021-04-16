<script lang="ts">
    import Button from "./components/Button.svelte";
    let isReleased = true;
</script>

<div
    class="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
>
    <div class="px-10 py-7 min-w-96 bg-gray-700 shadow-lg rounded">
        <div>
            <div class="relative w-full rounded-full h-3 bg-gray-900">
                <div class="absolute h-40 inset-x-2 bottom-1.5 overflow-hidden">
                    <div
                        class="h-40 bg-white rounded-t-sm transition-transform transform-gpu duration-1000 ease-linear {isReleased
                            ? 'translate-y-20'
                            : ''}"
                    />
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

<script lang="ts">
    export let disabled: boolean = false;
    export let maxHeight: number = 1;

    let isHover = false;
    $: isHover = disabled ? false : isHover;
    let isPress = false;

    $: currentHeight = disabled
        ? 0
        : isHover
        ? isPress && isHover
            ? 0
            : maxHeight / 1.5
        : maxHeight;
</script>

<button
    {disabled}
    class="bg-gray-900 rounded focus:outline-none -translate-y-1 shadow-sm {disabled
        ? 'cursor-default'
        : 'cursor-pointer'}"
    on:click
    on:mouseover={() => {
        isHover = true;
    }}
    on:mouseout={() => {
        isHover = false;
    }}
    on:mousedown={() => {
        isPress = true;
    }}
    on:mouseup={() => {
        isPress = false;
    }}
>
    <div
        class="px-4 py-1 transform-gpu bg-gray-800 rounded transition-transform
        duration-75 ease-linear"
        style="--tw-translate-y: {-0.25 * currentHeight}rem;"
    >
        <slot />
    </div>
</button>

<script lang="ts">
    export let disabled: boolean = false;
    export let maxHeight: number = 1.2;

    let isHover = false;
    let isPress = false;

    let currentHeight: number;
    $: if (disabled || isPress)
        currentHeight = 0;
    else if (isHover)
        currentHeight = maxHeight / 1.5
    else
        currentHeight = maxHeight
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

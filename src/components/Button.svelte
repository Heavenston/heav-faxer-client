<script lang="ts">
    export let disabled: boolean = false;
    export let maxHeight: number = 1.2;

    let isHover = false;
    let isPress = false;
    let isFocus = false;

    let currentHeight: number;
    $: if (disabled || isPress)
        currentHeight = 0;
    else if ((isHover && window.matchMedia("(hover: hover)").matches) || isFocus)
        currentHeight = maxHeight / 1.5
    else
        currentHeight = maxHeight
</script>

<button
    {disabled}
    class="focus:outline-none outline-none -translate-y-1 shadow-sm
    transition-all duration-75 ease-linear rounded
    {disabled
        ? 'cursor-default'
        : 'cursor-pointer'}"
    style="padding-top: {0.25 * maxHeight}rem;"
    
    on:click
    on:mouseover={() => {isHover = true}}
    on:mouseout={() => {isHover = false}}
    on:mousedown={() => {isPress = true}}
    on:mouseup={() => {isPress = false}}
    on:focus={() => {isFocus = true}}
    on:blur={() => {isFocus = false}}
>
    <div class="bg-gray-900 rounded">
        <div
            class="px-4 py-1 transform-gpu bg-gray-800
            rounded transition-transform duration-75 ease-linear"
            style="--tw-translate-y: {-0.25 * currentHeight}rem;"
        >
            <slot />
        </div>
    </div>
</button>

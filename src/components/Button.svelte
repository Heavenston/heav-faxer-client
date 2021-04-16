<script lang="ts">
    export let disabled: boolean = false;

    let isHover = false;
    $: isHover = disabled ? false : isHover;
    let isPress = false;

    let translateSize = "-translate-y-2";
    $: translateSize = disabled
        ? "-translate-y-0"
        : isHover
        ? isPress && isHover
            ? "-translate-y-0"
            : "-translate-y-0.5"
        : "-translate-y-1";
</script>

<button
    {disabled}
    class="bg-gray-900 rounded focus:outline-none shadow-sm {disabled
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
        class="px-4 py-1 transform-gpu {translateSize} bg-gray-800 rounded transition-transform duration-100 ease-linear"
    >
        <slot />
    </div>
</button>

<script lang="ts">
    let isHover = false;
    let isPress = false;

    const hoverFn = (v: boolean) => () => {
        isHover = v;
    };
    const pressFn = (v: boolean) => () => {
        isPress = v;
    };

    let translateSize = "-translate-y-2";
    $: translateSize = isHover
        ? isPress && isHover
            ? "-translate-y-0"
            : "-translate-y-0.5"
        : "-translate-y-1";
</script>

<button
    class="bg-gray-900 rounded focus:outline-none shadow-sm"
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
    <div class="px-4 py-1 transform {translateSize} bg-gray-800 rounded">
        <slot />
    </div>
</button>

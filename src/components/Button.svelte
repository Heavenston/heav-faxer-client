<script lang="ts">
    let isHover = false;
    let isPress = false;

    const hoverFn = (v: boolean) => () => {
        isHover = v;
    };
    const pressFn = (v: boolean) => () => {
        isPress = v;
    };

    let translateSize = "2";
    $: translateSize = isHover ? (isPress && isHover ? "0" : "0.5") : "1";
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
    <div
        class="px-4 py-1 transform -translate-y-{translateSize} bg-gray-800 rounded"
    >
        <slot />
    </div>
</button>

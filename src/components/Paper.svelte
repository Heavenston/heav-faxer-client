<script lang="ts">
    export let show = false;
    export let extendClass = "";
    export let delay: false | number = false;
</script>

<div
    class="absolute inset-x-2 bottom-0 overflow-hidden {!show &&
        'pointer-events-none'} duration-300"
>
    <div
        class="h-40 bg-white text-black p-2 px-3 rounded-t-sm
                            transition-transform transform ease-in-out duration-300
                            select-none relative font-typewriter
                            {extendClass}
                            {show
            ? ''
            : 'translate-y-44'}"
        style={delay && show ? `transition-delay: ${delay}ms;` : ""}
    >
        <slot />
    </div>
</div>

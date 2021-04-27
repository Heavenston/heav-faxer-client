<script lang="ts">
    export let text: string | null = null;
</script>

<div
    class="absolute inset-x-12 bottom-0 h-11 transform translate-y-full overflow-hidden {text ==
    null
        ? 'invisible'
        : ''}"
>
    <div
        class="
                absolute inset-0 rounded-b transform-gpu bg-white
                transition-transform duration-200 ease-in-out text-black
                flex justify-center items-center
                {text ==
        null
            ? '-translate-y-full'
            : ''}
                "
    >
        {text}
        <!--        {window.location.protocol}//{window.location.host}/#{finalCode}-->
    </div>
</div>

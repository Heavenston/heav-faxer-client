<script lang="ts">
    import SegDisp from "../components/SegmentedDisplay.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
        iframe.src = "http://files.faxer.heav.fr/" + location.hash.substr(1);
    });
</script>

<!-- Center the whole app as well as adding background etc -->
<div
    class="absolute inset-0 flex justify-center
    items-center bg-gray-800 text-white text-xl"
>
    <!-- Container for the main frame as well as contained papers -->
    <div class="pt-14 relative">
        <div
            class="relative mx-8 rounded-t-lg h-8 bg-gray-900 shadow-inner z-0"
        />
        <!-- Main frame -->
        <div class="px-5 py-3 bg-gray-700 shadow-xl rounded relative">
            <!-- Display container -->
            <div class="bg-gray-800 rounded w-full px-3 py-1">
                <SegDisp
                    shape="XXXXXXXXXXXXXXXXXXXXXX"
                    content="Receiving a file"
                />
            </div>
        </div>
    </div>
</div>

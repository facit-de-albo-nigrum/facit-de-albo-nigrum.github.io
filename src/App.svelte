<script lang="ts">
  import Countdown from "./lib/Countdown.svelte";
  import { isDate } from "./lib/date";
  import info from "./lib/info";
  import Video from "./lib/Video.svelte";

  let correctDate: boolean;
  isDate.subscribe((isDate) => correctDate = isDate);
</script>

<main>
  {#if correctDate}
    <Countdown />
  {:else}
    <Video />
  {/if}
</main>

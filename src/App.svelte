<script lang="ts">
  import Countdown from "./lib/Countdown.svelte";
  import { isDate } from "./lib/date";
  import Video from "./lib/Video.svelte";

  let correctDate: boolean;
  isDate.subscribe((isDate) => correctDate = isDate);
</script>

<main>
  {#if correctDate}
    <Video />
  {:else}
    <Countdown />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
</style>

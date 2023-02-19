<script lang="ts">
  import Countdown from "./lib/Countdown.svelte";
  import { isDate } from "./lib/date";
  import info from "./lib/info";
  import Video from "./lib/Video.svelte";

  let correctDate: boolean;
  isDate.subscribe((isDate) => correctDate = isDate);

  let bypass: boolean = false;
</script>

<main>
  {#if correctDate || bypass}
    <Video />
  {:else}
    <Countdown />
    <button on:click={() => bypass = true}>gi por favor nao aperte aqui</button>
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

  button {
    position: absolute;
    bottom: 1rem;
  }
</style>

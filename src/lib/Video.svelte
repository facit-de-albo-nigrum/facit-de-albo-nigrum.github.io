<script lang="ts">
  import info from "./info";
  import sites from "./sites-aleatorios.json";

  let password: string = "";
  $: correctPassword = password === info.password;

  let site: string = "";
  function getRandomSite() {
    const randomIndex = Math.floor(Math.random() * sites.length);
    site = sites[randomIndex];
  }
</script>

{#if correctPassword}
  <div class="video">
    <iframe
      title="Video"
      width="560"
      height="315"
      src={info.video}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <a
    class="random_site"
    href={site}
    on:click={getRandomSite}
    target="_blank"
    rel="noreferrer"
  >
    Random site
  </a>
  </div>
{:else}
  <div class="password">
    <input
      type="password"
      placeholder="Enter the password"
      bind:value={password}
    />
  </div>
{/if}

<style>
  .password {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .password input {
    width: 300px;
    height: 50px;
    font-size: 1.5rem;
    padding: 0 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .video iframe {
    width: 560px;
    height: 315px;
  }

  .random_site {
    position: absolute;
    bottom: 2rem;
    display: block;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    text-decoration: none;
  }
</style>

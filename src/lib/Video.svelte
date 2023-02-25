<script lang="ts">
  import info from "./info";
  import sites from "./sites-aleatorios.json";

  let password: string = "";
  $: correctPassword = password === info.password;

  let visitedSites: string[] = [];
  let site: string = "";

  function getRandomSite() {
    const randomIndex = Math.floor(Math.random() * sites.length);

    if (visitedSites.includes(sites[randomIndex])) {
      getRandomSite();
      return;
    }

    if (visitedSites.length === sites.length)
      visitedSites = [];

    visitedSites.push(sites[randomIndex]);
    site = sites[randomIndex];
  }
</script>

{#if correctPassword || import.meta.env.DEV}
  <div class="video">
    <iframe
      title="Video"
      src={info.video}
      frameborder="0"
      allow="encrypted-media; picture-in-picture"
      allowfullscreen
    />
    <div class="buttons">
      <a
        class="random_site"
        href={site}
        on:click={getRandomSite}
        target="_blank"
        rel="noreferrer"
      >
        Site aleatório
      </a>
      <button class="random_site">
        nao
      </button>
      <button>
        ????
      </button>
    </div>
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
    border-radius: 1rem;
    outline: transparent;
    transition: all 0.2s ease-in-out;
  }

  .password input:hover,
  .password input:focus {
    border-radius: 2rem;
    transition: all 0.2s ease-in-out;
  }

  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2rem;
    height: 100%;
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 2rem;
  }

  .video iframe {
    width: clamp(50%, 560px, 1000px);
    aspect-ratio: 16/9;
  }

  .buttons a, .buttons button {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    text-decoration: none;
    margin-top: auto;
  }
</style>

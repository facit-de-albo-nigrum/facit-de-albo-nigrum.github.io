<script lang="ts">
    import info from "./info";
    let password: string = "";
    $: correctPassword = password === info.password;
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
</style>

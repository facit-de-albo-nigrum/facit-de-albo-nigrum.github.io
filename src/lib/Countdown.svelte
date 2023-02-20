<script lang="ts">
    import { isDate, time, timeUntilDate } from "./date";
    let distance: number;
    time.subscribe((time) => distance = time);

    $: days = Math.floor(distance / (1000 * 60 * 60 * 24));
    $: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    $: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    $: seconds = Math.floor((distance % (1000 * 60)) / 1000);
</script>

<div class="count">
    <div class="count__item">
        <div class="count__number">{days}</div>
        <div class="count__text">Days</div>
    </div>
    <div class="count__item">
        <div class="count__number">{hours}</div>
        <div class="count__text">Hours</div>
    </div>
    <div class="count__item">
        <div class="count__number">{minutes}</div>
        <div class="count__text">Minutes</div>
    </div>
    <div class="count__item">
        <div class="count__number">{seconds}</div>
        <div class="count__text">Seconds</div>
    </div>
</div>

<style>
    .count {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    @media (max-width: 768px) {
        .count {
            flex-direction: column;
        }
    }

    .count__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
    }

    .count__number {
        font-size: 3rem;
        font-weight: 700;
        color: #fff;
    }

    .count__text {
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
    }
</style>

import { writable } from "svelte/store";
import info from "./info";

export const timeUntilDate = writable(info.targetDate - Date.now());
export let isDate = writable(info.targetDate <= Date.now());
export let time = writable(info.targetDate - Date.now());

setInterval(() => {
    timeUntilDate.update((time) => time - 1000);
}, 1000);

timeUntilDate.subscribe((time) => {
    isDate.set(time <= 0);
});

timeUntilDate.subscribe((timeU) => {
    time.set(timeU);
});

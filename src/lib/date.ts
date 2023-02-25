import { writable } from "svelte/store";
import info from "./info";

export const timeMS = writable(info.targetDate - Date.now());
export const isDate = writable(info.targetDate <= Date.now());

setInterval(() => {
    timeMS.update((time) => time - 1000);
}, 1000);

timeMS.subscribe((time) => {
    isDate.set(time <= 0);
});

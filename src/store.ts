import { writable } from 'svelte/store';

export const showLayoutOverlay = writable(false);
export const isLoadingPreloader = writable(true);
export const layoutOverlayBgClicked = writable(false);

import { type Writable, writable } from 'svelte/store';

const themes = ['system', 'light', 'dark'] as const;

type Theme = (typeof themes)[number];

const theme: Writable<Theme> = writable('light');

export { theme, themes };
export type { Theme };

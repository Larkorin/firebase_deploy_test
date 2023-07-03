import * as universal from '../entries/pages/sverdle/how-to-play/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.ts";
export const imports = ["_app/immutable/nodes/5.25bcff62.js","_app/immutable/chunks/environment.c65a56ab.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js"];
export const stylesheets = ["_app/immutable/assets/5.83e29ea0.css"];
export const fonts = [];

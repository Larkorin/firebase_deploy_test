

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b8102a64.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js","_app/immutable/chunks/stores.918715ea.js","_app/immutable/chunks/singletons.d384d5c0.js","_app/immutable/chunks/index.5ebb6b47.js"];
export const stylesheets = [];
export const fonts = [];

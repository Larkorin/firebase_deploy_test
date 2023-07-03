import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.7ee7d260.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d384d5c0.js","_app/immutable/chunks/index.5ebb6b47.js"];
export const stylesheets = ["_app/immutable/assets/4.53295563.css"];
export const fonts = [];

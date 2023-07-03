export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.b811e1c9.js","app":"_app/immutable/entry/app.9d5ccd1b.js","imports":["_app/immutable/entry/start.b811e1c9.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/singletons.d384d5c0.js","_app/immutable/chunks/index.5ebb6b47.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9d5ccd1b.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js","_app/immutable/chunks/environment.c65a56ab.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

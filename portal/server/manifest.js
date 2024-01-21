const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Programme-02260562.pdf","afrivenlogo.jpg","b2.jpg","b4.jpg","bc1.jpg","bc3.jpg","bc33.gif","favicon.png","jabdb.png","logo.jpeg","nutaglogo.jpg","softmorelogo.png","splearn.jpeg","splearn.png","timeline 1.png"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.9928f331.js","app":"_app/immutable/entry/app.ec224811.js","imports":["_app/immutable/entry/start.9928f331.js","_app/immutable/chunks/scheduler.35986cdd.js","_app/immutable/chunks/singletons.c32206f5.js","_app/immutable/entry/app.ec224811.js","_app/immutable/chunks/scheduler.35986cdd.js","_app/immutable/chunks/index.f0d1f3f0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-332bccb2.js')),
			__memo(() => import('./chunks/1-ed499c02.js')),
			__memo(() => import('./chunks/2-811d88af.js')),
			__memo(() => import('./chunks/3-29ba6e88.js')),
			__memo(() => import('./chunks/4-53897cdc.js')),
			__memo(() => import('./chunks/5-3aeadbf6.js')),
			__memo(() => import('./chunks/6-274546b5.js')),
			__memo(() => import('./chunks/7-667a9a77.js')),
			__memo(() => import('./chunks/8-2e459e16.js')),
			__memo(() => import('./chunks/9-169df7e9.js')),
			__memo(() => import('./chunks/10-80665600.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gettingStarted",
				pattern: /^\/gettingStarted\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/grades",
				pattern: /^\/grades\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/landing/[[port]]/[[key]]",
				pattern: /^\/landing(?:\/([^/]+))?(?:\/([^/]+))?\/?$/,
				params: [{"name":"port","optional":true,"rest":false,"chained":true},{"name":"key","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/portal/[[port]]/[[key]]",
				pattern: /^\/portal(?:\/([^/]+))?(?:\/([^/]+))?\/?$/,
				params: [{"name":"port","optional":true,"rest":false,"chained":true},{"name":"key","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/sign-up/[[company]]",
				pattern: /^\/sign-up(?:\/([^/]+))?\/?$/,
				params: [{"name":"company","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

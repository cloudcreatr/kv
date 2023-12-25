				import worker, * as OTHER_EXPORTS from "/workspaces/kv/.wrangler/tmp/pages-1JgVPS/bundledWorker-0.05500258468709851.mjs";
				import * as __MIDDLEWARE_0__ from "/workspaces/kv/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/workspaces/kv/.wrangler/tmp/pages-1JgVPS/bundledWorker-0.05500258468709851.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;
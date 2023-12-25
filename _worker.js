
export default {
    async fetch(request, env, ctx) {
        let url = new URL(request.url);
        
        if (url.searchParams.has("set")) {
            await env.kv.put("om", url.searchParams.get("set"));

            const start = performance.now();
            const value = await env.kv.get("om", { cacheTtl: 60 });
            const stop = performance.now();
            console.log("same data center timing", stop - start);
            return new Response(`updated hello ${value}`);
        }
        
        const start = performance.now();
        const value = await env.kv.get("om", { cacheTtl: 60 });
        const stop = performance.now();
        console.log("cache around the world timing", stop - start);
        return new Response(`hello ${value}`);
    }
};

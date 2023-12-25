// export default {
//     async fetch(request, env, ctx) {
//         let url = new URL(request.url);

//         if (url.searchParams.has("set")) {
//             await env.kv.put("om", url.searchParams.get("set"));

//             const start = performance.now();
//             const value = await env.kv.get("om", { cacheTtl: 60 });
//             const stop = performance.now();
//             console.log("same data center timing", stop - start);
//             return new Response(`updated hello ${value}`);
//         }

//         const start = performance.now();
//         const value = await env.kv.get("om", { cacheTtl: 60 });
//         const stop = performance.now();
//         console.log("cache around the world timing", stop - start);
//         return new Response(`hello ${value}`);
//     }
// };

function getCookieValue(cookieString, cookieName) {
  if (!cookieString) {
    return null;
  }

  let cookies = cookieString.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let cookiePair = cookies[i].split("=");
    if (cookiePair[0] === cookieName) {
      return cookiePair[1];
    }
  }
  return null;
}
export default {
  async fetch(request) {
    let url = new URL(request.url);
    if (url.searchParams.has("set")) {
      const value = url.searchParams.get("set");
      return new Response(`updated hello ${value}`, {
        headers: {
          "set-cookie": `om=${value}; path=/`,
        },
      });
    }
    const cookieString = request.headers.get("cookie");
    const value = getCookieValue(cookieString, "om");

    return new Response(`hello ${value}`);
  },
};

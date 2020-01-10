Public Deploy: https://tmp-nextjs-example.wilsonpage.now.sh

---

## Bug 1: `"rewrites"` routes with any dynamic params `404` using `now dev`

## Steps:

1. Run `now dev`
2. Visit http://localhost:3000/hello
3. Observe `world` `200` response ✅
4. Visit http://localhost:3000/hello-regex/john
5. Observe `404` response ❌
6. Visit http://localhost:3000/hello-param/john
7. Observe `404` response ❌

## Bug 2: `"rewrites"` routes with named params have strange value when _deployed_ using `now`.

## Steps:

1. Deploy with `now` (or use [this deploy](https://tmp-nextjs-example.wilsonpage.now.sh))
2. Visit https://tmp-nextjs-example.wilsonpage.now.sh/hello
3. Observe `world` `200` response ✅
4. Visit https://tmp-nextjs-example.wilsonpage.now.sh/hello-regex/john
5. Observe `{"name":"john","query":{"name":"john"}}` response ✅
6. Visit https://tmp-nextjs-example.wilsonpage.now.sh/hello-param/john
7. Observe `{"name":":name?name=john","query":{"name":":name?name=john"}}` response ❌

importScripts("/sw-toolbox.js");
toolbox.precache([
    "/load_coolors.html",
    "/icon/192x192.png", 
    "/icon/512x512.png"
])

toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})
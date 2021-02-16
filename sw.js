importScripts("/coolors_pwa/sw-toolbox.js");
toolbox.precache([
    "/coolors_pwa/load_coolors.html",
    "/coolors_pwa/icon/192x192.png", 
    "/coolors_pwa/icon/512x512.png"
])

toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})
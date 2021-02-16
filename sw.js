importScripts("/coolors_pwa/sw-toolbox.js");
toolbox.precache([
    "/essai_pwa/icon/192x192.png", 
    "/essai_pwa/icon/512x512.png"
])

toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})
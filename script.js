var deferredPrompt;

const btn = document.querySelector(".btn");

window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    btn.style.display = "block";

    btn.addEventListener('click', (e) => {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {

            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
                btn.style.display = "none";
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        })
    })
})
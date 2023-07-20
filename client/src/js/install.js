const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
butInstall.style.visibility = 'visible';
});

//  A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
butInstall.setAttribute('disabled',true);
butInstall.textContent = 'Installed';
});

// An handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
console.log('Success!', 'appinstalled', event);
butInstall.setAttribute('disabled',false);
butInstall.textContent = 'Install!';
});

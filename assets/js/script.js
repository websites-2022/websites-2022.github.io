let toggle = document.getElementById('modeToggle');
let body = document.body
let logoDarkMode = document.getElementById('dmodeLogo');
let logoLightMode = document.getElementById('lmodeLogo');

toggle.onclick = function () {
    if (toggle.checked) {
        body.classList.add('darkmode');
        body.classList.remove('lightmode');
        logoLightMode.classList.add('d-none');
        logoDarkMode.classList.remove('d-none');
    } else {
        body.classList.add('lightmode');
        body.classList.remove('darkmode');
        logoDarkMode.classList.add('d-none');
        logoLightMode.classList.remove('d-none');
    }
};

let cursor = document.querySelector('.custom-cursor');
let cursorBefore = document.querySelector('.custom-cursor-before');

if (cursor && cursorBefore) {
    document.addEventListener('mousemove', e => {
        window.requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorBefore.style.left = e.clientX + 'px';
            cursorBefore.style.top = e.clientY + 'px';
        });
    });
}

const lightModeBtn = document.querySelector('.lightmodebtn');

const currentMode = localStorage.getItem('lightMode');
if (currentMode === 'enabled') {
    document.body.classList.add('lightmode');
    lightModeBtn.textContent = 'DarkMode';
} else {
    document.body.classList.remove('lightmode');
    lightModeBtn.textContent = 'LightMode';
}

lightModeBtn.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('lightmode');


    if (isLightMode) {
        localStorage.setItem('lightMode', 'enabled');
        lightModeBtn.textContent = 'DarkMode';
    } else {
        localStorage.setItem('lightMode', 'disabled');
        lightModeBtn.textContent = 'LightMode';
    }
});



const form = document.querySelector('.card2');
const noBtn = document.querySelector('.button2');

const formReact = form.getBoundingClientRect();
const noBtnReact = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (formReact.width - noBtnReact.width)) + 2;
    const j = Math.floor(Math.random() * (formReact.height - noBtnReact.height)) + 2;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
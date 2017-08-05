const divs = document.querySelectorAll('div');

function logText(e) {

    console.log(this.classList.value);
e.stopPropagation(); //makes you click only one div, stop bubbling
}


divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true //works like removing event listener
}));

button.addEventListener('click', () => {
    console.log('click!');
}, {
    once: true
});
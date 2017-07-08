/**
 * Created by lkupinski on 08.07.2017.
 */

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {

    const {offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;



    if(this !== e.target) {

        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 blue,
                            ${xWalk * -1}px ${yWalk * -2}px 0 green,
                            ${xWalk * 5}px ${yWalk *3}px 0 red`;

}

hero.addEventListener('mousemove', shadow);
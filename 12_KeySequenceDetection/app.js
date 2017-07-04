/**
 * Created by lkupinski on 04.07.2017.
 */

const pressed = [];
const secretCode = 'unicorn';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
});
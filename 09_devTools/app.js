/**
 * Created by lkupinski on 01.07.2017.
 */

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

// Interpolated
console.log('hello i am a %s string', '+poo');

// Styled
console.log('%c i am some tex', 'font-size:50px');

// warning!
console.warn('oh no');

// Error :|
console.error('bug');

// Info
console.info('info');

// Testing
console.assert(1 === 1, 'it is wrong!'); //displayed onyl if statement is wrong

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);  //or groupCollapsed
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
});

// counting
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});


console.table(dogs);

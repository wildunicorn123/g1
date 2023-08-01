import chalkAnimation from 'chalk-animation';

//chalkAnimation.glitch('I hope this works');
//setTimeout(() => {
    //console.log('Did it?');
//}, 4000);
const words = chalkAnimation.neon('I hope this works');
let timers1 = setInterval(() => console.log(words), 5000);

setTimeout(() => {
clearInterval(timers1);
console.log('did it?');
}, 5000);

const header = document.querySelector('.header');
const intersection = document.querySelector('.big-corps');
console.log(intersection);

const initCoord = intersection.getBoundingClientRect();
console.log(initCoord);

window.addEventListener('scroll', () => {
 console.log(window.scrollY);

 if (window.scrollY > initCoord.top) header.classList.add('navStick');
 else header.classList.remove('navStick');
});

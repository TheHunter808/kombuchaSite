const testimonialContainer = document.querySelector('.testimonial-cards');
const btnRight = document.getElementById('testimonial-btn-right');
const btnLeft = document.getElementById('testimonial-btn-left');
const card = document.getElementsByClassName('testimonial-card');

let screenWidth = window.innerWidth;

//default configuration
card[0].classList.add('cardActive');
// btnLeftHide();
// cardIndex++;

let slideIndex = null;
let cardIndex = 0;
const maxSlide = 6;
let slideLeftIndex = null;
let slideRightIndex = null;

btnRight.addEventListener('click', () => {
 //  console.log(`♠ cardIndex BEFORE incremenet: ${cardIndex}♠`);
 //  //increase the card index,to activate card
 cardIndex++;
 //  console.log(`♠ cardIndex AFTER incremenet: ${cardIndex}♠`);
 // activate card
 card[cardIndex].classList.add('cardActive');

 //  console.log(`SlideIndex BEFORE incremenet: ${slideIndex}`);
 slideLeftLogic();
 //increase slideIndex,on which the slide movement is based
 slideIndex++;
 slideLeftIndex++;
 //  console.log(`btn right: ${slideIndex}`);
 console.log(`btn right Slide index: ${slideIndex}`);

 //decrement cardIndex by 1, to keep track of previous card

 card[cardIndex - 1].classList.remove('cardActive');

 //check for last slide
 if (slideIndex === maxSlide) {
  btnRight.style.display = 'none';
 }
});

btnLeft.addEventListener('click', () => {
 if (slideIndex === 0) {
  btnLeftHide();
 }

 console.log(`btn left Slideindex: ${slideIndex}`);
 slideIndex--;
 console.log(`btn left Slideindex: ${slideIndex}`);
 sliderightLogic();
 slideRight++;
});

function btnLeftHide() {
 btnLeft.style.display = 'none';
}

function btnLeftShow() {
 btnLeft.style.display = 'inline-block';
}

function slideLeft(num) {
 let transform = (testimonialContainer.style.transform = `translateX(-${
  slideIndex * num
 }%)`);
 console.log(transform);
}

function slideRight(num) {
 let transform = (testimonialContainer.style.transform = `translateX(-${
  (slideIndex - 1) * num
 }%)`);
 console.log(` slide Right: ${transform}`);
}

function sliderightLogic() {
 //slider logic
 if (screenWidth < 900 && screenWidth > 600) {
  console.log(`true: ${screenWidth}`);

  slideRight(50);
 }
 if (screenWidth < 500) {
  console.log(`true: ${screenWidth}`);
  slideRight(100);
 } else if (screenWidth > 950) {
  slideRight(30);
 }
}

function slideLeftLogic() {
 //slider logic
 if (screenWidth < 900 && screenWidth > 600) {
  console.log(`true: ${screenWidth}`);

  slideLeft(50);
 }
 if (screenWidth < 500) {
  console.log(`true: ${screenWidth}`);
  slideLeft(100);
 } else if (screenWidth > 950) {
  slideLeft(30);
 }
}

// function activateCardLeft() {
//  card[slideIndex - 1].classList.add('cardActive');
// }

const slide1 = document.querySelector('.testimonial-cards_slide1');
const slide2 = document.querySelector('.testimonial-cards_slide2');
const btnRight = document.getElementById('testimonial-btn-right');
const btnLeft = document.getElementById('testimonial-btn-left');
const card = document.getElementsByClassName('testimonial-card');

let screenWidth = window.innerWidth;

//default configuration
card[0].classList.add('cardActive');
// btnLeftHide();
// curCardActive++;

let slideIndex = null;
let curCardActive = 0;
let curCardActiveRight = 5;
const maxSlide = 6;
let slideLeftIndex = null;
let slideRightIndex = null;

btnRight.addEventListener('click', () => {
 // increase card active
 curCardActive++;
 //  show card active
 cardActiveRight();

 slideIndex++;
 slideLeftIndex++;

 console.log(`current card index RIGHT: ${slideIndex}`);
 console.log(`current card ACTIVE index RIGHT: ${curCardActive}`);

 //remove previous active card
 cardRemoveLeft();

 //slide2 in if slide1 reach curCardActive2
 if (curCardActive === 3) {
  slide2in();
 }

 //check for last slide
 if (slideIndex === maxSlide) {
  btnRight.style.display = 'none';
 }
});

btnLeft.addEventListener('click', () => {
 if (slideIndex === 0) {
  btnLeftHide();
 }
 // decrease card active
 //  curCardActive--;
 //  show card active
 cardActiveLeft();

 slideIndex--;
 slideLeftIndex--;

 console.log(`current card index LEFT: ${slideIndex}`);
 console.log(`current card ACTIVE index LEFT: ${curCardActive}`);

 //remove previous active card
 cardRemoveRight();

 //slide2 in if slide1 reach curCardActive2
 //  if (curCardActive === 3) {
 //   slide2in();
 //  }

 //check for last slide
 //  if (slideIndex === maxSlide) {
 //   btnRight.style.display = 'none';
 //  }
 //  console.log(`btn left Slideindex: ${slideIndex}`);
 //  slideIndex--;
 //  console.log(`btn left Slideindex: ${slideIndex}`);
 //  sliderightLogic();
 //  slideRight++;
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

function cardActiveRight() {
 card[curCardActive].classList.add('cardActive');
}

function cardActiveLeft() {
 card[curCardActive - 1].classList.add('cardActive');
}

function cardRemoveLeft() {
 card[curCardActive - 1].classList.remove('cardActive');
}

function cardRemoveRight() {
 card[curCardActive].classList.remove('cardActive');
}

function slide2in() {
 slide1.style.transform = 'translateX(-100%)';
 slide2.style.transform = 'translateX(-110%)';
}

function slide1in() {
 slide2.style.transform = 'translateX(110%)';
 slide1.style.transform = 'translateX(0%)';
}

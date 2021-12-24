const slide1 = document.querySelector('.testimonial-cards_slide1');
const slide2 = document.querySelector('.testimonial-cards_slide2');
const btnRight = document.getElementById('testimonial-btn-right');
const btnLeft = document.getElementById('testimonial-btn-left');
const card = document.getElementsByClassName('testimonial-card');

// //default configuration
card[0].classList.add('cardActive');

let curSlide = 0;
const maxSlide = 6;
let slide1Active = null;
let slide2Active = null;
let desktopSlide = true;

btnRight.addEventListener('click', () => {
 if (desktopSlide === true) {
  desktopSlide = true;
  slideNext();
 }
});

btnLeft.addEventListener('click', () => {
 if (desktopSlide === true) {
  desktopSlide = true;
  slidePrev();
  console.log('desktop btnLeft');
 }
});

function slideNext() {
 curSlide++;
 nextCard(curSlide);
 console.log(curSlide);
 if (curSlide === 3) {
  slide2in();
  slide2Active = true;
 }
 if (curSlide === 5) {
  btnRightHide();
 }
 if (curSlide > 0) {
  btnLeftShow();
 }
 console.log(slide2Active);
}

function slidePrev() {
 if (curSlide === 3 && slide2Active === true) {
  slide1in();
  slide2Active === false;
 }

 console.log(slide2Active);
 prevCard(curSlide);
 curSlide--;
 if (curSlide === 0) {
  btnLeftHide();
 }
 if (curSlide < 5) {
  btnRightShow();
 }
 console.log(curSlide);
}

function nextCard(slide) {
 card[slide].classList.add('cardActive');
 card[slide - 1].classList.remove('cardActive');
}

function prevCard(slide) {
 card[slide - 1].classList.add('cardActive');
 card[slide].classList.remove('cardActive');
}

function btnLeftHide() {
 btnLeft.style.display = 'none';
}
function btnLeftShow() {
 btnLeft.style.display = 'inline-block';
}

function btnRightHide() {
 btnRight.style.display = 'none';
}
function btnRightShow() {
 btnRight.style.display = 'inline-block';
}

function slide2in() {
 slide1.style.transform = 'translateX(-100%)';
 slide2.style.transform = 'translateX(-110%)';
}

function slide1in() {
 slide2.style.transform = 'translateX(110%)';
 slide1.style.transform = 'translateX(0%)';
}

//media query match

const mediaQuery = window.matchMedia('(max-width:1388px)');

if (mediaQuery.matches) {
 const card = document.querySelectorAll('.testimonial-card');

 desktopSlide = false;
 let curMobSlide = 0;
 let maxSlide = card.length;

 //1.spreading card at this screensize
 //2.adding active card list to all

 btnRight.addEventListener('click', nextMobSlide);

 btnLeft.addEventListener('click', () => {});

 function nextMobSlide() {
  //condition for maxSlide
  if (curMobSlide === maxSlide - 1) {
   curMobSlide = 0;
  } else {
   curMobSlide++;
  }
  //condition for leftBtn
  if (curMobSlide > 0) {
   btnLeftShow();
  } else if (curMobSlide === 0) {
   btnLeftHide();
  }
  //slides and cardActivation for each
  card.forEach((slide, i) => {
   slide.style.transform = `translateX(${100 * (i - curMobSlide)}%) `;
   console.log(slide, i);
  });
 }

 function prevMobSlide() {
  //condition for left btns and first slide
  if (curMobSlide === 1) {
   btnLeftHide();
  } else {
   btnLeftShow();
  }
  //decresing curMobSlide
  curMobSlide--;
  //   slide and activation for left btn
  card.forEach((slide, i) => {
   slide.style.transform = `translateX(-${100 * (i - curMobSlide)}%) `;
   console.log(slide, i);
  });

  console.log(curMobSlide);
 }

 function initMobile() {
  card.forEach((c, i) => {
   c.style.transform = `translateX(${100 * i}%)`;
   c.classList.add('cardActive');
  });
 }
 initMobile();
}

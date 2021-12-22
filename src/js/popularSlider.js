const popularSlider = document.querySelector('.popular-cards__slider');
const popularBtnLeft = document.getElementById('popular-btn-left');
const popularBtnRight = document.getElementById('popular-btn-right');
const popularNavNumber = document.getElementsByClassName('popular-nav-number');
const popularNavNumber__border = document.getElementsByClassName(
 'popular-nav-number__border'
);
console.log(popularNavNumber);
console.log(popularNavNumber__border);

//default configuration
leftBtnHide();

//slide function

function slideLeft() {
 popularSlider.style.transform = `translateX(-${count * 25}%)`;
 console.log(`start 👋`);
 console.log(`slide left: ${count}`);
}

function slideRight() {
 popularSlider.style.transform = `translateX(${count * 25}%)`;
 console.log(`start 👋`);
 console.log(`slide Right: ${count}`);
}

function slideReset() {
 popularSlider.style.transform = `translateX(0%)`;
}
//hide and show buttons

function leftBtnHide() {
 popularBtnLeft.style.display = 'none';
}

function leftBtnShow() {
 popularBtnLeft.style.display = 'inline-block';
}
function rightBtnHide() {
 popularBtnRight.style.display = 'none';
}
function rightBtnShow() {
 popularBtnRight.style.display = 'inline-block';
}

//to add and remove pagination highlight

let slideIndex = 0;
let navIndex = 1;
let navIndexMax = 4;
let slideLeftIndex = null;
let slideRightIndex = null;
let maxSlideIndex = 2;
let navMax = 3;
// default highlighter
popularNavNumber[0].classList.add('nav-number-active');
popularNavNumber__border[0].classList.add('border-active');

// navigationShow();

popularBtnLeft.addEventListener('click', () => {
 slideLeft();
});

popularBtnRight.addEventListener('click', slideRight);

function slideRight() {
 if (slideIndex === maxSlideIndex) {
  console.log(true);
  rightBtnHide();
 }
 if (slideLeftIndex > -1) {
  leftBtnShow();
 }
 console.log(` 👉 navIndex BEFORE increment: ${navIndex}`);
 navIndex++;
 console.log(`👉 navIndex AFTER increment: ${navIndex}`);
 navigationShow();
 popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`;
 navigationRemove();
 slideIndex++;
 console.log(`slideIndex: ${slideIndex}`);
 slideRightIndex++;
 console.log(`slide right Index: ${slideRightIndex}`);
 slideLeftIndex--;
 console.log(`Slide Left Index: ${slideLeftIndex}`);
 console.log(
  (popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`)
 );
}

function slideLeft() {
 if (slideLeftIndex === -1) {
  leftBtnHide();
 }
 if (slideRightIndex > 1) {
  rightBtnShow();
 }
 console.log(`👈 navIndex BEFORE decrement: ${navIndex}`);
 navIndex--;
 console.log(`👈 navIndex AFTER decrement: ${navIndex}`);
 navigationShow();

 popularSlider.style.transform = `translateX(${slideIndex * 25}%)`;
 navigationRemove();
 slideIndex--;
 slideLeftIndex++;
 console.log(`slide right: ${slideIndex}`);
 console.log(`slideLeft Index: ${slideLeftIndex}`);
 console.log(
  (popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`)
 );
}

// function navigationShow() {
//  popularNavNumber[slideIndex].classList.add('nav-number-active');
//  popularNavNumber__border[slideIndex].classList.add('border-active');
// }

function navigationShow() {
 popularNavNumber[navIndex - 1].classList.add('nav-number-active');
 popularNavNumber__border[navIndex - 1].classList.add('border-active');
}

function navigationRemove() {
 popularNavNumber[slideIndex].classList.remove('nav-number-active');
 popularNavNumber__border[slideIndex].classList.remove('border-active');
}

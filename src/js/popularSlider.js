const popularSlider = document.querySelector('.popular-cards__slider');
const popularBtnLeft = document.getElementById('popular-btn-left');
const popularBtnRight = document.getElementById('popular-btn-right');
const popularNavNumber = document.querySelectorAll('.popular-nav-number');
const popularNavNumber__border = document.querySelectorAll(
 '.popular-nav-number__border'
);
console.log();

// console.log(popularBtnRight);

// let count = 1;
// let slideCount = 1;
// let slideCountRemover = 0;
// let rightBtn = false;
// let leftBtn = false;

//default configuration
leftBtnHide();
// navigationShow(0, 0);

// popularBtnLeft.addEventListener('click', () => {
//  //resets count from right button
//  if (rightBtn === true) {
//   count = 1;
//   slideCount = 1;
//   slideCountRemover = 0;
//   rightBtn = false;
//   console.log(`💥 Left btn true: Count reset to 0 successfully!💥`);
//  }

//  //slide logic
//  slideLeft();
//  count++;
//  console.log((popularSlider.style.transform = `translateX(${count * 25}%)`));
//  //shows right button
//  rightBtnShow();
//  console.log(`count: ${count}`);

//  //  remove default pagination tracker
//  navigationRemove(0, 0);

//  //remove previous Slide highlight
//  navigationRemove(slideCountRemover, slideCountRemover);
//  slideCountRemover++;
//  console.log(`removal count: ${slideCountRemover}`);

//  //  show recent slide
//  navigationShow(slideCount, slideCount);
//  console.log(`slidecount: ${slideCount}`);
//  slideCount++;
//  console.log(`slide count after increment: ${slideCount}`);
//  console.log(`🏁 end`);
//  //maxlength logic
//  if (count === 4) {
//   count = 0;
//   //   slideCount = 1;
//   //   slideCountRemover = 0;
//   leftBtnHide();
//   console.log(`🏁 count is 4, count is reset to 0 🏁`);
//  }
//  leftBtn = true;
//  return leftBtn;
// });

//////////// 👇 button right

// popularBtnRight.addEventListener('click', () => {
//  if (!leftBtn === true) {
//   leftBtnShow();
//  }
//  if (leftBtn === true) {
//   count - 1;
//   //   navigationRemove(slideCountRemover, slideCountRemover);
//   //   navigationShow(0, 0);
//   leftBtn = false;
//  }
//  if (count < 0) {
//   console.log('negative');
//  }
//  slideRight();

//  count--;

//  console.log(`count: ${count}`);
//  //  navigationRemove(0, 0);
//  // if(count <)
//  //  console.log(
//  //   (popularSlider.style.transform = `translateX(${(count - 1) * 25}%)`)
//  //  );
//  let result = getComputedStyle(popularSlider);
//  console.log(result);
//  //  show recent slide
//  //  navigationShow(slideCount - 1, slideCount - 1);
//  //  console.log(`slidecount --Right: ${slideCount - 1}`);
//  //  slideCount--;
//  //  console.log(`slide count after increment--Right: ${slideCount}`);
//  //  //remove previous Slide highlight
//  //  navigationRemove(slideCountRemover - 1, slideCountRemover - 1);
//  //  slideCountRemover--;
//  console.log(`👉removal count--Right: ${slideCountRemover}`);
//  console.log(`🏁 end`);

//  if (count === -2) {
//   count = 0;
//   rightBtnHide();
//   //   leftBtnShow();
//   //   slideReset();
//  }
//  rightBtn = true;
// });

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

// function navigationShow(num, borderIndex) {
//  Math.abs(popularNavNumber[num].classList.add('nav-number-active'));
//  popularNavNumber__border[borderIndex].classList.add('border-active');
// }

// function navigationRemove(num, borderIndex) {
//  Math.abs(popularNavNumber[num].classList.remove('nav-number-active'));
//  popularNavNumber__border[borderIndex].classList.remove('border-active');
// }

let slideIndex = 0;
let slideLeftIndex = null;
let slideRightIndex = null;
let maxSlideIndex = 2;

leftBtnShow();
popularBtnLeft.addEventListener('click', () => {
 if (slideLeftIndex === 1) {
  leftBtnHide();
 }
 popularSlider.style.transform = `translateX(${slideIndex * 25}%)`;
 slideIndex--;
 slideLeftIndex++;
 console.log(`slide right: ${slideIndex}`);
 console.log(`slideLeft Index: ${slideLeftIndex}`);
 console.log(
  (popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`)
 );
});

popularBtnRight.addEventListener('click', () => {
 if (slideIndex === maxSlideIndex) {
  //   popularSlider.style.transform = `translateX(0)%`;
  console.log(true);
  rightBtnHide();
 }
 popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`;
 slideIndex++;
 console.log(`slideIndex: ${slideIndex}`);
 slideRightIndex++;
 console.log(`slide right Index: ${slideRightIndex}`);
 slideLeftIndex--;
 console.log(`Slide Left Index: ${slideLeftIndex}`);
 console.log(
  (popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`)
 );
});

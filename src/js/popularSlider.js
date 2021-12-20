const popularSlider = document.querySelector('.popular-cards__slider');
const popularBtnLeft = document.getElementById('popular-btn-left');
const popularBtnRight = document.getElementById('popular-btn-right');

console.log(popularBtnRight);

let count = 1;
let rightBtn = null;
let leftBtn = null;
popularBtnLeft.addEventListener('click', () => {
 slideLeft(popularSlider);
 count++;
 if (count === 4) {
  console.log('💥 Stop 💥 ');
  count = 0;
  console.log('💯 count reset to 0 💯');
 }
 leftBtn = true;
 console.log(leftBtn);
});

popularBtnRight.addEventListener('click', () => {
 if (leftBtn === true) {
  count = 0;
  console.log(`Left btn true: Counter reset to 0 successfully!`);
  slideRight(popularSlider);
  count--;
  if (count === -4) {
   console.log('💥 Right button Stop 💥 ');
   count = 0;
   console.log('💯 Right: count reset to 0 💯');
  }
 }
 if (count === 1) {
  count = -1;
 }
 //  rightBtn = true;
 //  if (rightBtn === true) {
 //   slideRight(popularSlider);
 //   count--;
 //   if (count === -4) {
 //    console.log('💥 Right button Stop 💥 ');
 //    count = 0;
 //    console.log('💯 Right: count reset to 0 💯');
 //   }
 //  }
});

// function slideLeft(slider) {
//  slider.style.transform = `translateX(-${count * 25}%)`;

//  console.log(`slide left: ${count}`);
// }

// function slideRight(slider) {
//  slider.style.transform = `translateX(${count * 25}%)`;

//  console.log(`slide Right: ${count}`);
// }

function slideLeft() {
 popularSlider.style.transform = `translateX(-${count * 25}%)`;

 console.log(`slide left: ${count}`);
}

function slideRight() {
 popularSlider.style.transform = `translateX(${count * 25}%)`;

 console.log(`slide Right: ${count}`);
}

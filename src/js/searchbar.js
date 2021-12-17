const searchIcon = document.getElementById('searchIcon');
const iconContainer = document.querySelector('.header-icon');
// console.log(searchIcon);

searchIcon.addEventListener('click', () => {
 iconContainer.classList.toggle('searchbarActive');
});

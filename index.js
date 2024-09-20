const hamButton = document.querySelector('.hamIcon');
const menu = document.querySelector('.linksGroup');
const closeButton = document.querySelector('.closeIcon');


hamButton.addEventListener("click",()=>{
  menu.style.display = 'flex';
  hamButton.style.display = 'none';
});

closeButton.addEventListener("click",()=>{
  hamButton.style.display = 'flex';
  menu.style.display = 'none';
});
const hamButton = document.querySelector('.hamIcon');
const menu = document.querySelector('.linksGroup');
const closeButton = document.querySelector('.closeIcon');
const features = document.querySelector('.Features');
const company = document.querySelector('.company');
const upIcon = document.querySelector('.featuresClose');
const Klose = document.querySelector('.Klose');
const overlay =document.querySelector('.overlay')


Klose.addEventListener('click',()=>{
  menu.classList.remove('show')
  overlay.classList.remove('showOverlay')
})
hamButton.addEventListener("click",()=>{
  menu.classList.add('show');
  overlay.classList.add('showOverlay')
});


// HOVER STATES
features.addEventListener("mouseenter",()=>{
  document.querySelector('.featuresList').style.display = 'flex';
  document.querySelector('.downIcon').style.transform = 'rotate(180deg)';
});
features.addEventListener("mouseleave",()=>{
  document.querySelector('.featuresList').style.display = 'none';
document.querySelector('.downIcon').style.transform = 'rotate(0deg)';
});
company.addEventListener("mouseenter",()=>{
  document.querySelector('.companyList').style.display = 'flex';
  document.querySelector('.downIcons').style.transform = 'rotate(180deg)';
});
company.addEventListener("mouseleave",()=>{
  document.querySelector('.companyList').style.display = 'none';
document.querySelector('.downIcons').style.transform = 'rotate(0deg)';
});
// HOVER STATES


features.addEventListener('click',()=>{
  document.querySelector('.featuresList').style.display == 'flex';
})
company.addEventListener('click',()=>{
  document.querySelector('.companyList').style.display == 'flex';
})


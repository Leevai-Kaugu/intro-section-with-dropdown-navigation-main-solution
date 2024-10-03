const hamButton = document.querySelector('.hamIcon');
const menu = document.querySelector('.linksGroup');
const closeButton = document.querySelector('.closeIcon');
const features = document.querySelector('.Features');
const company = document.querySelector('.company');
const upIcon = document.querySelector('.featuresClose');
const Klose = document.querySelector('.Klose');


Klose.addEventListener('click',()=>{
  hamButton.style.display = 'flex';
  menu.style.display = 'none';
})
hamButton.addEventListener("click",()=>{
  menu.style.display = 'flex';
  hamButton.style.display = 'none';
});


// HOVER STATES
features.addEventListener("mouseenter",()=>{
  document.querySelector('.featuresList').style.display = 'flex';
  document.querySelector('.downIcon').style.display = 'none';
  document.querySelector('.upIcon').style.display = 'block';
});
features.addEventListener("mouseleave",()=>{
  document.querySelector('.featuresList').style.display = 'none';
document.querySelector('.upIcon').style.display = 'none';
document.querySelector('.downIcon').style.display = 'block';
});
company.addEventListener("mouseenter",()=>{
  document.querySelector('.companyList').style.display = 'flex';
  document.querySelector('.downIcons').style.display = 'none';
  document.querySelector('.upIcons').style.display = 'block';
});
company.addEventListener("mouseleave",()=>{
  document.querySelector('.companyList').style.display = 'none';
document.querySelector('.upIcons').style.display = 'none';
document.querySelector('.downIcons').style.display = 'block';
});
// HOVER STATES


features.addEventListener('click',()=>{
  document.querySelector('.featuresList').style.display == 'flex';
})
company.addEventListener('click',()=>{
  document.querySelector('.companyList').style.display == 'flex';
})


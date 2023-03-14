

//Globals

const toggleBtn = document.querySelector("#toggle-btn");
const navigation = document.querySelector("#navigation");
const backgroundSvg = document.querySelector(".background_svg");



toggleBtn.addEventListener('click', ()=>{
  toggleBtn.classList.toggle('active-toggle');
  navigation.classList.toggle('active-nav');
  backgroundSvg.classList.toggle('active-svg')
});
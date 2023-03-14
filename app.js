

//Globals

const toggleBtn = document.querySelector("#toggle-btn");
const navigation = document.querySelector("#navigation");
const backgroundSvg = document.querySelector(".background_svg");



toggleBtn.addEventListener('click', ()=>{
  toggleBtn.classList.toggle('active-toggle');
  navigation.classList.toggle('active-nav');
  backgroundSvg.classList.toggle('active-svg')
});


const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry=>{
    console.log(entry);

    if (entry.isIntersecting){
      entry.target.classList.add("show");
    } else{
      entry.target.classList.remove("show");      
    }
  })
})



// grabbing all .hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// header oncroll================================

window.addEventListener('scroll', ()=>{
  document.querySelector(".header").classList.toggle('header_scroll', window.scrollY > 10);
});
//Navs Oncroll===============
window.addEventListener('scroll', ()=>{
  document.querySelector(".navs").classList.toggle('navy_scroll', window.scrollY > 10);
});

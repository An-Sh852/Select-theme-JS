const hamburger= document.querySelector(".hamburger");
const navLinks= document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click',() => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
   link.classList.toggle("fade");
  });
});

//1. grab blue_btn
//2. on click --> add class named "open-blue"
//3. hover effect on button through mouse-events 

const blue_btn = document.querySelector(".blue-btn")
const green_btn = document.querySelector(".green-btn")
const yellow_btn = document.querySelector(".yellow-btn")
const pink_btn = document.querySelector(".pink-btn")
const body = document.body

green_btn.addEventListener("click",applyGreenTheme);
function applyGreenTheme(){
  console.log("clicked")
  body.classList.add("green-open");
  body.classList.remove("blue-open");
  body.classList.remove("yellow-open");
  body.classList.remove("pink-open");
}

blue_btn.addEventListener("click",applyBlueTheme);
function applyBlueTheme(){
  body.classList.add("blue-open");
  body.classList.remove("pink-open");
  body.classList.remove("yellow-open");
  body.classList.remove("green-open");
}

yellow_btn.addEventListener("click",applyYellowTheme);
function applyYellowTheme(){
  body.classList.add("yellow-open");
  body.classList.remove("pink-open");
  body.classList.remove("blue-open");
  body.classList.remove("green-open");

}

pink_btn.addEventListener("click",applyPinkTheme);
function applyPinkTheme(){
  body.classList.add("pink-open");
  body.classList.remove("blue-open");
  body.classList.remove("green-open");
  body.classList.remove("yellow-open");
}


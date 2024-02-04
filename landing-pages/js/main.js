const headerEl = document.querySelector("header");
const headerTop = headerEl.offsetTop;
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
const link = document.querySelectorAll(".link");
const contentImageLink = document.querySelectorAll("#section3 .content a");

let posX = 0;
let posY = 0;
let mouseX = 0;
let mouseY = 0;

// navbar sticky
function fixedHeader(){
   scrollY > headerTop ? document.body.classList.add('fixedheader') : document.body.classList.remove('fixedheader')
}

window.addEventListener("scroll", fixedHeader);
// navbar sticky

// cursor
TweenMax.to({}, 0.016, {
   repeat: -1,
   onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
      TweenMax.set(follower, {
         css: {
            left: posX - 20,
            top: posY - 20
         }
      });
      TweenMax.set(cursor, {
         css: {
            left: mouseX,
            top: mouseY
         }
      });
   }
});

window.addEventListener("mousemove", function(e){
   mouseX = e.clientX;
   mouseY = e.clientY;
});

link.forEach((item) =>{
   item.addEventListener("mouseenter", function(){
      cursor.classList.add("active");
      follower.classList.add("active");
   });
});

link.forEach((item) =>{
   item.addEventListener("mouseleave", function(){
      cursor.classList.remove("active");
      follower.classList.remove("active");
   });
});

contentImageLink.forEach((item) =>{
   item.addEventListener("mouseenter", function(){
      cursor.classList.add("view");
      follower.classList.add("view");
   });
});

contentImageLink.forEach((item) =>{
   item.addEventListener("mouseleave", function(){
      cursor.classList.remove("view");
      follower.classList.remove("view");
   });
});
// cursor

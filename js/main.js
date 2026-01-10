// Navbar toggle
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
menu.onclick = () => navbar.classList.toggle("active");

// Dark mode
document.getElementById("darkToggle").onclick = () => document.body.classList.toggle("dark");

// Typed text
const texts = ["Frontend Developer","Web Developer","Learner"];
let i=0,j=0;
const typed = document.getElementById("typed");
(function type(){
  if(j<texts[i].length){
    typed.textContent += texts[i][j++];
    setTimeout(type,100);
  }else{
    setTimeout(()=>{
      typed.textContent="";
      j=0;
      i=(i+1)%texts.length;
      type();
    },1500);
  }
})();

// Scroll animation
const scrolls = document.querySelectorAll(".scroll");
window.addEventListener("scroll",()=>{
  scrolls.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("show");
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
    if(navbar.classList.contains('active')) navbar.classList.remove('active');
  });
});

// WhatsApp
function sendToWhatsApp(){
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  window.open(`https://wa.me/8801828315879?text=Name:${name.value}%0APhone:${phone.value}%0AEmail:${email.value}%0AMessage:${message.value}`);
}
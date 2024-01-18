let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};

function redirect(){

}
function submitform(){
  let x = document.getElementById("showName");
    x.innerHTML = document.getElementById("nameuser").value;
    let y = document.getElementById("showEmail");
    y.innerHTML = document.getElementById("myemail").value;
    let z = document.getElementById("showSubject");
    z.innerHTML = document.getElementById("subject").value;
    let a = document.getElementById("showMsg");
    a.innerHTML = document.getElementById("msg").value;  
    document.getElementById("snackbarsubmit").value="Form submit successfully"
    var d = document.getElementById("snackbarsubmit");

    // Add the "show" class to DIV
    d.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ d.className = d.className.replace("show", ""); }, 3000);

}
function savelogin(e,p,flag){
  this.data =flag
console.log(e,p)
let x = document.getElementById("demo");
    x.innerHTML = document.getElementById("email").value;
document.getElementById("snackbar").value="login successfully...."
    var z = document.getElementById("snackbar");

    // Add the "show" class to DIV
    z.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ z.className = z.className.replace("show", ""); }, 3000);
window.redirect("/index.html")
const box = document.getElementById('login-form');

// 👇️ removes element from DOM
box.style.display = 'none';
}
document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
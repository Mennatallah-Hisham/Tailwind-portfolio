

const  navBtn = document.querySelector(".nav-btn");
const navbmenu = document.querySelector(".mobile-nav");
const closeIcon =document.querySelector(".nav-close");
const openIcon =document.querySelector(".nav-open");

navBtn.addEventListener("click",()=>{


    navbmenu.classList.toggle("hidden");
    navbmenu.classList.toggle("flex");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    

});
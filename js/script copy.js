//Deklarasi Variabel
const main_nav = document.querySelector("#main-nav");
const mouse = document.querySelector(".mouse");
const body = document.querySelector("body");
const main = document.querySelector("main");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const actionMouse = document.querySelectorAll(".actionMouse");
const toHome = document.querySelector(".to-home");
const toImage = document.querySelector(".to-image");
const toEmail = document.querySelector(".to-email");
const toWhatsapp = document.querySelector(".to-whatsapp");
const toInstagram = document.querySelector(".to-instagram");
const toGithub = document.querySelector(".to-github");
const hoverMenu = document.querySelectorAll(".hover-menu");
const toAbout = document.querySelector(".to-about");
const toSkills = document.querySelector(".to-skills");
const toAwards = document.querySelector(".to-awards");
const toProjects = document.querySelector(".to-projects");

toHome.addEventListener("click", () => {
    window.location.href="/";
});
toImage.addEventListener("click", () => {
    window.location.href="#image";
});
toEmail.addEventListener("click", () => {
    window.open("mailto:putuadi208@gmail.com");
});
toWhatsapp.addEventListener("click", () => {
    window.open("https://wa.me/+6283847406501");
});
toInstagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/adisaputra5944/");
});
toGithub.addEventListener("click", () => {
    window.open("https://github.com/adisaputra0/");
});


toAbout.addEventListener("click", () => {
    window.location.href="/about.html";
});

//Position and Speed
let positionX = 15;
let positionY = 15;

//Condition navbar
let condition = false;

//Condition mouse
let conditionMouse = false;

//Move Mouse
body.addEventListener("mousemove", (e) => {
    if(conditionMouse){
        positionY = e.clientY - 40;
        positionX = e.clientX - 40;
    }else{
        positionY = e.clientY - 0;
        positionX = e.clientX - 20;
    }
    
    mouse.style.top = positionY + "px";
    mouse.style.left = positionX + "px";
});

actionMouse.forEach(e => {
    e.addEventListener("mouseover", () => {
        conditionMouse = true;
        mouse.classList.add("mouse-hover");
    });
    e.addEventListener("mouseout", () => {
        conditionMouse = false;
        mouse.classList.remove("mouse-hover");
    });
});

hoverMenu.forEach(e => {
    e.addEventListener("mouseover", () => {
        mouse.classList.remove("mouse-black");
    });
    e.addEventListener("mouseout", () => {
        mouse.classList.add("mouse-black");
    });
});

function actionNav(){
    if(condition){    
        main_nav.style.top = "-800px";
        condition = false;
        main.style.opacity = "100%";
        toHome.style.opacity = "100%";
        main.style.zIndex = "1px";
        mouse.style.zIndex = -1;
        bar1.style.transform = "rotate(0deg) translate(0px, 0px)";
        bar2.style.transform = "rotate(0deg) translate(0px, 0px)";
    }else{
        main_nav.style.top = "0px";
        condition = true;
        main.style.opacity = "0%";
        toHome.style.opacity = "0%";
        main.style.zIndex = "-999px";
        mouse.style.zIndex = 1;
        bar1.style.transform = "rotate(45deg) translate(5px, 0px)";
        bar2.style.transform = "rotate(-45deg) translate(5px, 0px)";
    }
    bar1.classList.toggle("bg-dark-custom");
    bar2.classList.toggle("bg-dark-custom");
    mouse.classList.toggle("mouse-black");
}
//Deklarasi Variabel
const main_nav = document.querySelector("#main-nav");
const mouse = document.querySelector(".mouse");
const body = document.querySelector("body");
const main = document.querySelector("main");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const title = document.querySelector(".title");
const hoverMenu = document.querySelectorAll(".hover-menu");
const actionMouse = document.querySelectorAll(".actionMouse");

function toEmail(){
    window.open("mailto:putuadi208@gmail.com");
};
function toWhatsapp(){
    window.open("https://wa.me/+6283847406501");
};
function toInstagram(){
    window.open("https://www.instagram.com/adisaputra5944/");
};
function toGithub(){
    window.open("https://github.com/adisaputra0/");
};


function goTo(link){
    window.location.href=link;
};

function toImage(){
    window.location.href="#image";
}

//Position and Speed
let positionX = 15;
let positionY = 15;

//Condition navbar
let condition = false;

//Condition mouse
let conditionMouse = false;

let img_p = document.querySelectorAll(".img_p");

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
    
    img_p.forEach(element => {
        element.style.top = positionY - 200 + "px";
        element.style.left = positionX - 200 + "px";
    });
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
        main_nav.style.top = "-1000px";
        condition = false;
        main.style.opacity = "100%";
        title.style.opacity = "100%";
        main.style.zIndex = "1px";
        mouse.style.zIndex = -1;
        bar1.style.transform = "rotate(0deg) translate(0px, 0px)";
        bar2.style.transform = "rotate(0deg) translate(0px, 0px)";
    }else{
        main_nav.style.top = "0px";
        condition = true;
        main.style.opacity = "0%";
        title.style.opacity = "0%";
        main.style.zIndex = "-999px";
        mouse.style.zIndex = 1;
        bar1.style.transform = "rotate(45deg) translate(5px, 0px)";
        bar2.style.transform = "rotate(-45deg) translate(5px, 0px)";
    }
    bar1.classList.toggle("bg-dark-custom");
    bar2.classList.toggle("bg-dark-custom");
    mouse.classList.toggle("mouse-black");
}

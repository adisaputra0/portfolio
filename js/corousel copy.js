const corousel_cs = document.querySelectorAll(".corousel-cs");
const corousel_dots_cs = document.querySelectorAll(".corousel-dots-cs");

let startIndex = 1;
let points = 800;

corousel_dots_cs.forEach((element, index) => {
    element.addEventListener("click", () => {
        corousel_dots_cs.forEach(element => {
            element.classList.remove("bg-white-custom");
        });
        element.classList.add("bg-white-custom");
        index += 1;
        if(index != startIndex && index == 1){
            corousel_cs.forEach(element => {
                let pointsElement = element.offsetLeft;
                element.style.left = (pointsElement + (points * (startIndex - 1))) + "px";
            });
        }else if(index != startIndex && index == 2){
            corousel_cs.forEach(element => {
                let pointsElement = element.offsetLeft;
                if(index == 1){   
                    element.style.left = (pointsElement - points) + "px";   
                }else{
                    element.style.left = (pointsElement + points) + "px";
                }
            });
        }else if(index != startIndex && index == 3){
            corousel_cs.forEach(element => {
                let pointsElement = element.offsetLeft;
                element.style.left = (pointsElement - (points * (startIndex - 1))) + "px";
            });
        }
    });
});


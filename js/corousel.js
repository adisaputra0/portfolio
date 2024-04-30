const corousel_cs = document.querySelectorAll(".corousel-cs");
const corousel_dots_cs = document.querySelectorAll(".corousel-dots-cs");

corousel_dots_cs.forEach((element, index) => {
    element.addEventListener("click", () => {
        corousel_dots_cs.forEach(element => {
            element.classList.remove("bg-white-custom");
        });
        element.classList.add("bg-white-custom");
        corousel_cs.forEach(element2 => {
            element2.style.opacity = "0%";
            element2.style.zIndex = 1;
        });
        corousel_cs[index].style.opacity = "100%";
        corousel_cs[index].style.zIndex = 2;
    });
});


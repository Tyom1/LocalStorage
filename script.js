let dropdown = document.querySelector("#dropdown");
let btn = document.querySelector("#btn");
let num = document.querySelector("#num");

    document.body.style.background = localStorage.bgcolor;
    document.body.style.fontSize = localStorage.f_size + "px";

btn.addEventListener('click',function(){
    localStorage.setItem("bgcolor", dropdown.value);
    localStorage.setItem("f_size", num.value);
    document.body.style.background = localStorage.bgcolor;
    document.body.style.fontSize = localStorage.f_size + "px";
});
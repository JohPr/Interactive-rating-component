

let rating = document.querySelector(".rating");
let success = document.querySelector(".success");
let evaluation = document.querySelectorAll(".evaluation");
let ev_hover = document.querySelectorAll(".evaluation ~ .evaluation");
let btn = document.querySelector(".btn");
let a = document.querySelectorAll(".evaluation > a");
let num = 0;
let select = document.querySelector(".select > span");

for (let i = 0; i < evaluation.length; i++) {
    evaluation[i].addEventListener("click", e => {
        console.log(a[i].innerHTML);
        num = a[i].innerHTML;
    });
}

btn.addEventListener("click", e => {
    rating.style.display = "none";
    success.style.display = "block";
    select.innerHTML = "You selected "+num+" out of 5"
});
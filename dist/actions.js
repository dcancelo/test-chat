const open = document.querySelector("#open");
open.addEventListener("click", () => {

    document.querySelector("#shadow").classList.add("show");
    document.body.classList.add("chat-active");
});
const close = document.querySelector("#close");
close.addEventListener("click", () => {

    document.querySelector("#shadow").classList.remove("show");
    document.body.classList.remove("chat-active");
});
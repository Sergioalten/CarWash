
const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const title = document.getElementById('title');



function validarDados(){
    const validacao = 0;
    const userValue = user.value.trim();
   
}

const openModalButton = document.querySelector("#btn-form");
const closeModalButton = document.querySelector("#btn-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}
         
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})
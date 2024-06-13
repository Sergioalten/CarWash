function validarDados(){

    const userName = user.value;
    const userEmail = email.value;
    const userAssunto = title.value;

    if(typeof(userName) === 'string'){
        validacao = 1;
        alert(validacao)
    }
}

const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const title = document.getElementById('title');
        
const validacao = 0;
        
if(validacao === 1){
    const openModalButton = document.querySelector("#btn-form");
    const closeModalButton = document.querySelector("#btn-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    
    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle("hide"));
    }
    
    [openModalButton, closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    })
} 
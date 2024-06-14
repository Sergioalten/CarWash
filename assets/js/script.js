const user = document.getElementById('user');
const email = document.getElementById('email');
const title = document.getElementById('title');

function validarDados(){
    let validacao = 0;
    let userValue = user.value;
    let userEmail = email.value;
    let userTitle = title.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if(userValue !== ''){
        if((userEmail !== '') && (emailRegex.test(userEmail))){
            if(userTitle !== ''){
                validacao = 1;
            }
        } 
    }

    if (validacao === 1){
        toggleModal();
    }
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
         
[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})


function mostrarResposta(){
    let el = document. getElementById('resposta');

    let classResposta = el.classList;

    if(classResposta == 'resposta-off'){
        el.classList.remove('resposta-off');
        el.classList.add('resposta-on');     
    } else{
        el.classList.remove('resposta-on');
        el.classList.add('resposta-off');     
    }
}
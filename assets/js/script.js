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

function mostrarResposta(id){
    let el = document.getElementById(id);

    let classResposta = el.classList;

    if(classResposta == 'resposta-off1'){
        el.classList.remove('resposta-off1');
        el.classList.add('resposta-on1');
        contador++;  
    } else if (classResposta == 'resposta-on1'){
        el.classList.remove('resposta-on1');
        el.classList.add('resposta-off1');
        contador--;    
    }
    

    if(classResposta == 'resposta-off2'){
        el.classList.remove('resposta-off2');
        el.classList.add('resposta-on2');
        contador++;     
    } else if(classResposta == 'resposta-on2'){
        el.classList.remove('resposta-on2');
        el.classList.add('resposta-off2');
        contador--;     
    }

    if(classResposta == 'resposta-off3'){
        el.classList.remove('resposta-off3');
        el.classList.add('resposta-on3');
        contador++;     
    } else if(classResposta == 'resposta-on3'){
        el.classList.remove('resposta-on3');
        el.classList.add('resposta-off3');
        contador--;     
    }

    if(classResposta == 'resposta-off4'){
        el.classList.remove('resposta-off4');
        el.classList.add('resposta-on4');
        contador++;  
    } else if(classResposta == 'resposta-on4'){
        el.classList.remove('resposta-on4');
        el.classList.add('resposta-off4');
        contador--;     
    }

}

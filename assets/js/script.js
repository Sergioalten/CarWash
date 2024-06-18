// Validar dados de entrada
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

// Modal do formulário
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

// Mostrar as repostas da seção de dúvidas frequentes e alterar a imagem das setas
function mostrarResposta(id){
    let el = document.getElementById(id);
    const setaPergunta1 = document.querySelector('.faq-img1');
    const setaPergunta2 = document.querySelector('.faq-img2');
    const setaPergunta3 = document.querySelector('.faq-img3');
    const setaPergunta4 = document.querySelector('.faq-img4');
    let classResposta = el.classList;

    if(classResposta == 'resposta-off1'){
        el.classList.remove('resposta-off1');
        el.classList.add('resposta-on1');
        setaPergunta1.setAttribute("src", "/assets/images/up.png");  
    } else if (classResposta == 'resposta-on1'){
        el.classList.remove('resposta-on1');
        el.classList.add('resposta-off1');
        setaPergunta1.setAttribute("src", "/assets/images/down.png");  
    }

    if(classResposta == 'resposta-off2'){
        el.classList.remove('resposta-off2');
        el.classList.add('resposta-on2');
        setaPergunta2.setAttribute("src", "/assets/images/up.png");    
    } else if(classResposta == 'resposta-on2'){
        el.classList.remove('resposta-on2');
        el.classList.add('resposta-off2');
        setaPergunta2.setAttribute("src", "/assets/images/down.png");     
    }

    if(classResposta == 'resposta-off3'){
        el.classList.remove('resposta-off3');
        el.classList.add('resposta-on3');
        setaPergunta3.setAttribute("src", "/assets/images/up.png");    
    } else if(classResposta == 'resposta-on3'){
        el.classList.remove('resposta-on3');
        el.classList.add('resposta-off3');
        setaPergunta3.setAttribute("src", "/assets/images/down.png");    
    }

    if(classResposta == 'resposta-off4'){
        el.classList.remove('resposta-off4');
        el.classList.add('resposta-on4');
        setaPergunta4.setAttribute("src", "/assets/images/up.png");
    } else if(classResposta == 'resposta-on4'){
        el.classList.remove('resposta-on4');
        el.classList.add('resposta-off4');
        setaPergunta4.setAttribute("src", "/assets/images/down.png");   
    }
   
}
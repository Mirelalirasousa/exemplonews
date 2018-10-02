const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener('click', function(event){
    event.preventDefault();

    const email = document.querySelector("#newsInputEmail").value;
    if(email.length < 1){
        console.log("ERRO");
    }else{
        console.log("SUCESSO");
    }

// input.value
// se (valor for nulo)
// senao - sucesso

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso");
    
    resposta.appendChild(respostaMensagem);
    const enviar = document.querySelector(".news__form");
    enviar.insertBefore(resposta,input.parentNode);
});
const formulario = document.getElementById("formulario");
const formulario2 = document.getElementById("formulario2");
const msg = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const email2 = document.getElementById("email2");
const senha2 = document.getElementById("senha2");


// código de cadastro


var sideButtons = document.querySelectorAll('.side button');
        sideButtons.forEach(btn => btn.addEventListener('click', () => {
            document.body.classList.toggle('signup');
}))

function verificarEmail(emailValue, evento) {
  let dados = JSON.parse(localStorage.getItem("bd")) || [];

  for (let i = 0; i < dados.length; i++) {
    if (dados[i].emailcliente === emailValue) {
      msg.innerHTML = "Esse e-mail já existe!";
      evento.preventDefault();
      return;
    }
  }

  criarUsuario(evento);
}

formulario.onsubmit = (evento) => {
  if (nome.value === "") {
    evento.preventDefault();
    msg.innerHTML = "Digite seu nome";
    nome.focus();
    return;
  }

  if (email.value === "") {
    evento.preventDefault();
    msg.innerHTML = "Digite seu e-mail";
    email.focus();
    return;
  }

  if (senha.value === "") {
    evento.preventDefault();
    msg.innerHTML = "Digite sua senha";
    senha.focus();
    return;
  }
  verificarEmail(email.value, evento);
};
function criarUsuario(evento) {
  let dados = JSON.parse(localStorage.getItem("bd")) || [];

  dados.push({
    nomecliente: nome.value,
    emailcliente: email.value,
    senhacliente: senha.value,
  });

  localStorage.setItem("bd", JSON.stringify(dados));
  msg.innerHTML = "Usuário cadastrado com sucesso!";
  evento.preventDefault();
  setTimeout(() => {window.location.assign("login.html")},2000);
  window.location.assign("login.html");
}


// código de login


formulario2.onsubmit = ()=>{
  let dados = JSON.parse(localStorage.getItem("bd"))
  dados.forEach((elemento) => {
      if(elemento.email2 == email2.value && elemento.senha2 == senha2.value){
          msg.innerHTML = "Aguarde redirecionamento..."
          evt.preventDefault();
          sessionStorage.setitem("logado", email.value);
          setTimeout(()=>{
              window.location.assign("catalogo.html");
          }, 2000);
          window.location.assign("catalogo.html");
          return true;
      } else {
          msg.innerHTML = "Usuário ou senha incorretos!";
          evt.preventDefault();
          return null
      }
  });
}
const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

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
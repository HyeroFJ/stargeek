const msg = document.querySelector(".mensagem");
const formulario = document.getElementById(".formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evt) => {
    evt.preventDefault();

    let dados = JSON.parse(localStorage.getItem("bd"));
    let usuario = dados.find((elemento) => {
        return elemento.email === email.value && elemento.senha === senha.value;
    });

    if (usuario) {
        msg.innerHTML = "Aguarde redirecionamento...";
        setTimeout(() => {
            window.location.assign("catalogo.html");
        }, 2000);
        return true;
    } else {
        msg.innerHTML = "Usuário ou senha incorretos!";
        return null;
    }
}
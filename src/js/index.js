const botao = document.getElementById("botao-alterar-tema");
const imagemDoBotao = document.querySelector(".imagem-botao");

const body = document.querySelector("body");

botao.addEventListener("click", () => {
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemDoBotao.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        body.classList.add("modo-escuro");
        imagemDoBotao.setAttribute("src", "./src/imagens/moon.png");
    }
})



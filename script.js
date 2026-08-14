// =========================
// BOTÕES DE REAÇÃO
// =========================

const botoes = document.querySelectorAll(".post button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        if (curtiu === false) {

            texto.textContent++;
            curtiu = true;

        } else {

            texto.textContent--;
            curtiu = false;

        }

    });

});


// =========================
// TEMA ESCURO
// =========================

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);


function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

        btnTemaEscuro.textContent = "🌙";

    } else {

        corpoPagina.classList.add("tema-escuro");

        btnTemaEscuro.textContent = "☀️";

    }

}

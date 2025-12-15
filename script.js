// APLICA O TEMA SALVO

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// TROCA O TEMA
function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setIntem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

// FETCH NA API LOCAL
function buscarFrase() {
    fetch("dados.json")
    .then(res => res.json())
    .then(dados => {
        document.getElementById("frase").innerHTML = `
        <h3>${dados.titulo}</h3>
        <p>${dados.texto}</p>
        `
        ;              
    })
    .catch(() => {
        document.getElementById("frase").innerText =
        "Erro ao caregar dados.";
    });
}
let ipPessoas = document.querySelector("#ipPessoas");
let btQuantidade = document.querySelector("#btQuantidade");
let h3Ovos = document.querySelector("#h3Ovos");
let h3Queijo = document.querySelector("#h3Queijo");

function Resultado(){
    let Pessoas = Number(ipPessoas.value);
    let Ovos = Pessoas * 2;
    let Queijo = Pessoas * 50;
    h3Ovos.textContent = Ovos;
    h3Queijo.textContent = Queijo;
}

btQuantidade.onclick = Resultado;
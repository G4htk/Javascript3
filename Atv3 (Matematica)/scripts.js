let ipNumero = document.querySelector("#ipNumero");
let ipNumero2 = document.querySelector("#ipNumero2");
let btResultado = document.querySelector("#btResultado");
let h3Soma = document.querySelector("#h3Soma");
let h3Sub = document.querySelector("#h3Sub");
let h3Mult = document.querySelector("#h3Mult");
let h3Div = document.querySelector("#h3Div");

function Final(){
    let Numero = Number(ipNumero.value);
    let Numero2 = Number(ipNumero2.value);
    h3Soma.textContent = Numero + Numero2;
    h3Sub.textContent = Numero - Numero2;
    h3Mult.textContent = Numero * Numero2;
    h3Div.textContent = Numero / Numero2;
    h3Soma.innerHTML = "Soma: "+h3Soma.textContent;
    h3Sub.innerHTML = "Subtração: "+h3Sub.textContent;
    h3Mult.innerHTML = "Multiplicação: "+h3Mult.textContent;
    h3Div.innerHTML = "Divisão: "+h3Div.textContent;
}

btResultado.onclick = Final;

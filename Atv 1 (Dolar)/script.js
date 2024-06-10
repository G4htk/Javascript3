let ipDolar = document.querySelector("#ipDolar");
let btResultado = document.querySelector("#btResultado");
let umporcento = document.querySelector("#umporcento");
let doisporcento = document.querySelector("#doisporcento");
let cincoporcento = document.querySelector("#cincoporcento");
let dezporcento = document.querySelector("#dezporcento");

function Cotação(){
    umporcento.textContent = Number(ipDolar.value) * 1.01;
    doisporcento.textContent = Number(ipDolar.value) * 1.02;
    cincoporcento.textContent = Number(ipDolar.value) * 1.05;
    dezporcento.textContent = Number(ipDolar.value) * 1.10; 
}
btResultado.onclick = Cotação;
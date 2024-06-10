let ipVendas = document.querySelector("#ipVendas");
let ipMeta = document.querySelector("#ipMeta");
let ipMinima = document.querySelector("#ipMinima");
let btResultado = document.querySelector("#btResultado");
let h2Meta = document.querySelector("#h2Meta");
let h2Minima = document.querySelector("#h2Minima");

function Resultado(){
    let Venda = Number(ipVendas.value);
    let Meta = Number(ipMeta.value);
    let Minima = Number(ipMinima.value);

    if (Venda >= Meta && Venda >= Minima){
        alert("Bateu a meta")
    }

    else if (Venda >= Meta && Venda <= Minima){
        alert("Bateu a Meta, mas não a minima")
    }

    else {
        alert("Bateu a minima, mas não a meta")
    }

    h2Meta.textContent = (Venda / Meta)
    h2Minima.textContent = (Venda / Minima)
}


btResultado.onclick = Resultado; 
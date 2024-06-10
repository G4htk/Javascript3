let ipNumero = document.querySelector("#ipNumero");
let btResultado = document.querySelector("#btResultado");

function Par(){
    let Numero = Number(ipNumero.value);
    if (Numero%2 == 0 ) {
        alert ("Par")
    }
    else
     {alert("Impar")}
}

btResultado.onclick = Par;
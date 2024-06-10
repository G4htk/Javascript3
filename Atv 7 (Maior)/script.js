let ipNumero = document.querySelector("#ipNumero");
let ipNumero2 = document.querySelector("#ipNumero2");
let btMaior = document.querySelector("#btMaior");

function Maior(){
    let N = Number(ipNumero.value);
    let N2 = Number(ipNumero2.value)

    if (N > N2){
        alert("Maior")
    }
    else if (N == N2){
        alert("Iguais")
    }
    else{
        alert("Menor")
    }
}

btMaior.onclick = Maior;
let ipNota = document.querySelector("#ipNota");
let bt = document.querySelector("#bt");

function Resultado(){
    let Nota = ipNota.value;
    if (Nota < 6 && ipNota.value > 4){
        alert ("Prova Substituta");
    }
    else if (Nota > 6){
        alert ("Aprovado");
    }
    else{
        alert("Reprovado");
    }
}

bt.onclick = Resultado;
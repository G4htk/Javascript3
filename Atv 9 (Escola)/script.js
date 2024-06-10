let ipAlunos = document.querySelector("#ipAlunos");
let ipSalas = document.querySelector("#ipSalas");
let btResultado = document.querySelector("#btResultado");
let h2Resultado = document.querySelector("#h2Resultado");
let h2Sobras = document.querySelector("#h2Sobras");

function Resultado(){
    let aluno = Number(ipAlunos.value);
    let salas = Number(ipSalas.value);

     h2Resultado.textContent = (aluno / salas)
     h2Sobras.textContent = (aluno % salas)
}

h2Resultado.innerHTML = "Alunos por Sala";
h2Sobras.innerHTML = "Alunos Sobrando"

btResultado.onclick = Resultado;
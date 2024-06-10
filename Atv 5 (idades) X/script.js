let ipNome1 = document.querySelector("#ipNome1");
let ipNome2 = document.querySelector("#ipNome2");
let ipNome3 = document.querySelector("#ipNome3");
let ipIdade1 = document.querySelector("#ipIdade1");
let ipIdade2 = document.querySelector("#ipIdade2");
let ipIdade3 = document.querySelector("#ipIdade3");
let btResultado = document.querySelector("#btResultado");
let h2Velho = document.querySelector("#h2Velho");
let h2Meio = document.querySelector("#h2Meio");
let h2Novo = document.querySelector("#h2Novo");
let h2VelhoNome = document.querySelector("#h2VelhoNome");
let h2MeioNome = document.querySelector("#h2MeioNome");
let h2NovoNome = document.querySelector("#h2NovoNome");


function MaisVelho(){
     let Pnome = ipNome1.textContent;
     let Snome = ipNome2.textContent;
     let Tnome = ipNome3.textContent;
     let Pidade = Number(ipIdade1.value);
     let Sidade = Number(ipIdade2.value);
     let Tidade = Number(ipIdade3.value);

     h2Velho.textContent = Math.max (Pidade, Sidade, Tidade);
     h2Novo.textContent = Math.min (Pidade, Sidade, Tidade);
     
     
        

}

btResultado.onclick = MaisVelho;
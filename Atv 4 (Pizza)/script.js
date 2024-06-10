let ipSabor1 = document.querySelector("#ipSabor1");
let ipSabor2 = document.querySelector("#ipSabor2");
let ipSabor3 = document.querySelector("#ipSabor3");
let ipSabor4 = document.querySelector("#ipSabor4");
let ipRefri = document.querySelector("#ipRefri");
let btPedido = document.querySelector("#btPedido");
let h3Refri = document.querySelector("#h3Refri");
let h3Pizza = document.querySelector("#h3Pizza");

function Resultado(){
    let Refri = Number(ipRefri.value) * 7
    let Pizza = 4 * 12
    h3Pizza.textContent = Pizza
    let total = Refri + 48;
    let Sabor1 = ipSabor1.textContent;
    let Sabor2 = ipSabor2.textContent;
    let Sabor3 = ipSabor3.textContent;
    let Sabor4 = ipSabor4.textContent;
    h3Refri.textContent = Number(ipRefri.value) * 7;
}
{
    alert (ipSabor.textContent, ipSabor2.textContent, ipSabor3.textContent, ipSabor4.textContent);
}

btPedido.onclick = Resultado;

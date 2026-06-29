
function calcularIMC() {


    //Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoFin = document.getElementById("resultado");

    //Processamento
   if (isNaN(peso) || isNaN(altura) || peso < 1 || peso > 300 || altura < 0.5 || altura > 3.0) {
        resultadoFin.innerHTML = "<p style='color: #ff2c2c;'> insira valores válidos (Peso: 1-300kg | Altura 0.5-3.0m).Obrigado</p>"
        return;
   }


    //Saída
   let imc = peso / (altura*altura);

   let classif = "";

   if (imc < 18.5){
    classif = "Abaixo do peso";
   }
   else if (imc >= 18.5 && imc < 25) {
    classif = "Peso normal";
   }
   else if (imc >= 25 && imc < 30) {
    classif = " Sobrepeso ";
   }
   else {
    classif = "Obesidade";
   }

   resultadoFin.innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classif}</strong></p>
    `;
}
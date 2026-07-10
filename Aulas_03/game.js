//const number = Math.floor(Math.rendom() * 100) + 1;
let aleatorio;
let vida;


function faseOne() {
    aleatorio = Math.floor(Math.random() * 100) + 1;
    vida = 100;

    document.getElementById("numInput").value= "";
    document.getElementById("numInput").disabled = false;
    document.getElementById("btnEnvio").disabled = false;
    document.getElementById("mensagem").textContent = "Boa sorte";
    document.getElementById("mensagem").style.color = "#ffffff";
  
    document.getElementById("tentativas").textContent = `Vida: ${vida} HP`;
    document.getElementById("tentativas").style.color = "#4caf50";
    document.getElementById("btnReset").classList.add("hidden");


    const barra = document.getElementById("barProx");
    barra.style.width = "0%";
    barra.style.backgroundColor = "#00adb5";
}

function obsValor() {
    const input = document.getElementById("numInput");
    const valor = parseInt(input.value);
    const msgElement = document.getElementById("mensagem");
    const tentativasElement = document.getElementById("tentativas");
    const barra = document.getElementById("barProx");

    if (isNaN(valor) || valor < 1 || valor > 100) {
        msgElement.textContent = "Digite um número entre 1 e 100";
        msgElement.style.color = "#ffc107";
        return;
    }

    const diferente = Math.abs(valor - aleatorio);
    if (valor === aleatorio) {
        msgElement.textContent = `Correto... o número é ${aleatorio}. Parabéns.`;
        msgElement.style.color = "#4caf50";

        barra.style.width = "100%";
        barra.style.backgroundColor = "#4caf50";
        finalJogo();
    }   
    else {
        vida -= 10;
        tentativasElement.textContent = `Vida: ${vida} HP`;

        if (vida <= 30) {
            tentativasElement.style.color = "#ff3333";
        }
        else if (vida <= 60) {
            tentativasElement.style.color = "#ffc107";
        }

        if (vida <= 0) {
            msgElement.textContent = `GAME OVER! Suas vidas acabou. O número correto era ${aleatorio}. Tente novamente`;
            msgElement.style.color = "#ff3333";
            barra.style.width = "0%";
            finalJogo();
        }

        else {
            if (diferente <= 5) {
                msgElement.textContent = valor < aleatorio ? "Fervendo! (tente um número maior)" : "Fervendo! (tente um número menor)";
                barra.style.width = "90%";
                barra.style.backgroundColor = "#ff5722";
            
            }
            else if (diferente <= 15) {
                msgElement.textContent = valor < aleatorio ? "Esquentando... (tente um número maior)" : "Esquentando... (tente um número menor)";
                barra.style.width = "65%";
                barra.style.backgroundColor = "#ffc107";
            }
            else {
                msgElement.textContent = valor < aleatorio ? "Gelou! Passou, Passou, Passou um avião (tente um número maior)" : "Uoooo! Passou, Passou, Passou um avião (tente um número menor)";
                barra.style.width = "25%";
                barra.style.backgroundColor = "#00adb5";
            }
        }
    }

    input.value = "";
    input.focus();
}

function finalJogo() {
    document.getElementById("numInput").disabled = true;
    document.getElementById("btnEnvio").disabled = true;
    document.getElementById("btnReset").classList.remove("hidden");

}

function retornoJogo() {
    faseOne();
}

document.getElementById("numInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        obsValor();
    }
});

const tratarLimite = function() {
    if (this.value.length === 0) return;

    const valor = parseInt(this.value);
    const max = 100;

    if (valor > max) {
        this.value = max;
    }

    else if (valor < 1 || this.value.startsWith("0")) {
        this.value = 1;
    }
};

document.getElementById("numInput").addEventListener("input", tratarLimite);
document.getElementById("numInput").addEventListener("keyup", tratarLimite);

faseOne();
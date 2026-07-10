/* sistema de filme 

1. obter o nome do filme
2. obter duração em minutos
3. converter a duração de minutos em horas 
    exemplo: 70 minutos(ih e 10 minutos)
    60 minutos - 1h
    10 minutos
    70 -60 - 1,16 (arredondar pra baixo) -1
    horas - 1
    10 - 1 * 60 = 10
4. exibir o nome do filme 
5. exibir a duração em horas e minutos

*/

function algoritmo(){
    const titulo = document.getElementById("titulo").value;
    const tempo = document.getElementById("tempo").value;

    const horas = Math.floor(tempo / 60);
    const minutos = tempo - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("tempoSaida").textContent = horas + " hora(s) e " + minutos + " minuto(s) ";
}

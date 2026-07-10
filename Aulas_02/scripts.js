const matrizGast = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0]
]

//Funções utilitários
const pegarObj = (id) => document.getElementById(id);
const oposto = (valor) => valor < 0;
const somaValor =  (total, valor) => total + valor;
const limparLab = () => pegarObj('valor').value = '';

//Obter valores do formulario
const valorGuad = () => parseFloat(pegarObj("valor").value) || 0;
const valorCategoria = () => pegarObj("categoria").value;

//Obter categoria da matriz
const pegarCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria); 

//Atualizar valores da matriz
const pegarAtual = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualInf = () => {

    matrizGast.forEach(([nome, valor]) => {
        const elemente = pegarObj(nome);
        elemente.textContent = `${nome}: R$ ${valor}`;
        
    });

}


function adicionarGasto(){
    //console.log("Hello!!");

    /*
        1 pegar o valor informado
        2 pegar categoria informado
        3 impedir numeros negativos
        4 de acordo com a categoria atualiza o valor
        4.1 criar variaveis para controlar ou armazenar
            valoers de cada uma das categorias
        5 atualizar interface 
        6 limpar campos

    */
    const valorInf = valorGuad();
    const categoriaInf = valorCategoria();

    if(oposto(valorInf)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = pegarCategoria(matrizGast, categoriaInf);
    const total = pegarCategoria(matrizGast, "Total");

    pegarAtual(categoria, valorInf);
    pegarAtual(total, valorInf);

    atualInf();
    limparLab();

}

function calcularNivel(vitorias, derrotas) {

    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}

function exibirResultado(vitorias, derrotas) {
    const resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
}

console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");

exibirResultado(5, 2);

exibirResultado(15, 5);

exibirResultado(35, 10);

exibirResultado(65, 20);

exibirResultado(85, 15);

exibirResultado(95, 10);

exibirResultado(120, 25);

console.log("\n=== SIMULAÇÃO COM LAÇO DE REPETIÇÃO ===\n");

const jogadores = [
    { nome: "Jogador 1", vitorias: 8, derrotas: 3 },
    { nome: "Jogador 2", vitorias: 18, derrotas: 7 },
    { nome: "Jogador 3", vitorias: 45, derrotas: 15 },
    { nome: "Jogador 4", vitorias: 70, derrotas: 25 },
    { nome: "Jogador 5", vitorias: 150, derrotas: 30 }
];

for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    const resultado = calcularNivel(jogador.vitorias, jogador.derrotas);
    console.log(`${jogador.nome}: O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
}

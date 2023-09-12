const entrada = require("readline-sync");
const salarioMin = require('./salarioMinimo');
const inflacao = require('./inflacao')

console.log("Escolha uma das alternativas: ");
console.log();
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020 (Inflação)");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA (Inflação)");
console.log("4 - Sair");
console.log();

let escolha = entrada.question("Digite o numero da sua escolha: ");

while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4){
    console.log("Opção Inválida, digite novamente!")
    console.log()
    escolha = entrada.question("Digite o numero da sua escolha: ");
}

let tamanhoSalarioMinimo = salarioMin.salarioMinimo.length;
let tamanhoIpca = inflacao.ipca.length;

if(escolha == 1){
    for(let i = 0; i < tamanhoSalarioMinimo; i++){

        let ano = salarioMin.salarioMinimo[i].ano;
        console.log("Ano: ".padEnd(20, ".") + ano);

        let salario = salarioMin.salarioMinimo[i].salario;
        console.log("Salário mínimo: ".padEnd(20, ".") + "R$" + salario);

        console.log();

    }
} else if (escolha == 2){
    for(let i = 0; i < tamanhoIpca; i++){

        let ano = inflacao.ipca[i].ano;
        console.log("Ano: ".padEnd(20, ".") + ano);

        let porcentagem = inflacao.ipca[i].porcentagem;
        console.log("Inflação IPCA: ".padEnd(20, ".") + porcentagem + "%");

        console.log();

    }
} else if (escolha == 3){
    for(let i = 1; i < tamanhoSalarioMinimo; i++){

        let ano = salarioMin.salarioMinimo[i].ano;
        console.log("Ano: ".padEnd(20, ".") + ano);

        let salario = parseFloat(salarioMin.salarioMinimo[i])
        console.log("Salário mínimo: ".padEnd(20, ".") + "R$" + salario);

        let salarioAnterior = parseFloat(salarioMin.salarioMinimo[i - 1])
        let diferenca = salario - salarioAnterior;
        let crescimento = (diferenca / salarioAnterior) * 100;
        console.log("Crescimento Salarial: " + crescimento + "%");

        let porcentagem = inflacao.ipca[i].porcentagem;
        console.log("Inflação IPCA: ".padEnd(20, ".") + porcentagem + "%");

        console.log();
    }
} else {
    process.exit();
}
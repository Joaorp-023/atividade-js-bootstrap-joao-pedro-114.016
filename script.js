
// Painel de notas

console.log("Meu primeiro script foi executado!");
console.log("Painel de Notas");
console.log("Calculando as notas do aluno");

// Variaveis
const aluno = "Joao";
const curso = "Engenharia de Software";
let nota1 = 8;
const nota2 = 7;
const mediaMinima = 7;

// Alterando uma variavel
nota1 = 9;
console.log("Nova nota:", nota1);

// Exemplo antigo de variavel
var exemploAntigo = "Variavel com var";
console.log(exemploAntigo);

// Tipos de dados
const materia = "Programacao";
const quantidadeProvas = 2;
const matriculado = true;
const observacao = null;

console.log(materia);
console.log(quantidadeProvas);
console.log(matriculado);
console.log(observacao);

// Operacoes matematicas
const soma = nota1 + nota2;
const diferenca = nota1 - nota2;
const dobro = nota1 * 2;
const media = soma / 2;

console.log(soma);
console.log(diferenca);
console.log(dobro);
console.log(media);

// Comparacao
const aprovado = media >= mediaMinima;
console.log(aprovado);

// Template literal
console.log(`O aluno ${aluno} do curso ${curso} teve media ${media}.`);

// Condicao
if (media >= mediaMinima) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

// Desafio integrador
let pontosExtras = 1;
const notaFinal = media + pontosExtras;

console.log(`O aluno ${aluno} recebeu ${pontosExtras} ponto extra e ficou com nota ${notaFinal}.`);

if (notaFinal >= mediaMinima) {
    console.log("Aprovado com a nota final");
} else {
    console.log("Reprovado com a nota final");
}

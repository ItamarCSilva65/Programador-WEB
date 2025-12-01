
<!-- Exercícios Práticos – JavaScript

Prática 5 – Variáveis

Crie um script que:
● Crie duas variáveis: nome e idade
● Mostre uma frase no console:
"Olá, meu nome é ___ e eu tenho ___ anos" -->

<script>

    let nome = "Itamar"; /* prompt("Qual o seu nome"); */
    let idade = 60; /* prompt("Qual a sua idade"); */

    console.log("Olá, meu nome é" + nome + "e eu tenho" + idade + "anos");
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);


</script>


Prática 6 – IF / ELSE

Crie um script que pergunte a idade do usuário (prompt):
● Se a idade for menor que 18, mostrar: “Você é menor de idade.”
● Senão, mostrar: “Você é maior de idade.”

<script>

let idadeUsuário = Number(prompt(`Qual a sua idade?`));
if (idadeUsuario >= 18) {
console.log(`Você é maior de idade`);
} else {
console.log(`Você é menor de idade`);
}

</script>


Prática 7 – Arrays

Crie um array com 5 nomes.
Mostre no console:
● O primeiro nome
● O último nome
● Quantos nomes tem o array

<script>

Let nomes = ["Marcos", "Harrisson", "Loise". "Itamar". "Cleiton"];
console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[nomes,lenght - 1]);

</script>




Prática 8 – Mini Desafio Completo

Monte uma página HTML com:
✔ Um campo de input
✔ Um botão “Adicionar”
✔ Um parágrafo onde aparecem os itens adicionados
✔ No JS:
● Criar um array vazio
● Toda vez que o botão for clicado, adicionar o valor do input no array
● Mostrar o array atualizado na tela

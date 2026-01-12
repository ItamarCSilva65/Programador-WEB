// Função Tradicional
function dobraValor(valor){
    let resultado = valor * 2
    return resultado
}
console.log(dobraValor(10))

// Função Anônima
const dobraValorAnonimo = function(valor){
    let resultado = valor * 2
    return resultado
}
console.log(dobraValorAnonimo(100))

// Função Arrow (Função Flecha)
const dobraValorArrowFunction = (valor)=>{
    let resultado = valor * 2
    return resultado
}
console.log(dobraValorArrowFunction(150))

const dobraValorArrowFunctionSimplificado = valor => valor * 2

console.log(dobraValorArrowFunctionSimplificado(5))

//Crie uma função anônima que receba dois números e retorne a soma deles.
//Atribua essa função a uma variável chamada somar e teste com alguns valores.

const somar = (a, b) => a + b;

// Testando com valores
console.log(somar(100, 200)); // Saída: 300
console.log(somar(7, 7));     // Saída: 14
console.log(somar(-30, 50));     // Saída: 20

//Crie uma função anônima que receba dois números e retorne a soma deles.
//Atribua essa função a uma variável chamada somar e teste com alguns valores.


// De outra forma
const soma = function(numero1, numero2){
    return numero1 + numero2
}
console.log(somar(33,67))

//Crie uma função anônima que receba um número e:
// retorne "Par" se o número for par
// retorne "Ímpar" se o número for ímpar

const verificarParidade = numero => (numero % 2 === 0) ? "Par" : "Ímpar";

// Testando
console.log(verificarParidade(10)); // Saída: "Par"
console.log(verificarParidade(7));  // Saída: "Ímpar"
console.log(verificarParidade(0));  // Saída: "Par"


const verificarSeEhParOuImpar = function(numero){
    if(numero % 2 == 0){
        return `O número ${numero} é par`
    }else{
        return `O número ${numero} é ímpar`
    }
}
console.log(verificarSeEhParOuImpar(54.4))


// Crie uma função anônima que receba uma nota de aluno e:
// retorne "Aprovado" se a nota for maior ou igual a 7;
// retorne "Recuperação" se a nota for maior ou iguala a 3 e menor que 7;
// retorne "Reprovado" se a nota for menor que 3.

const verificarStatus = nota => 
    nota >= 7 ? "Aprovado" : (nota >= 3 ? "Recuperação" : "Reprovado");

// Testes
console.log(verificarStatus(8)); // Saída: "Aprovado"
console.log(verificarStatus(5));  // Saída: "Recuperação"
console.log(verificarStatus(1));  // Saída: "Reprovado"

const verificaAprovacao = (nota)=>{
    if(nota >= 7 && nota <= 10){
        return "Aprovado"
    }else if(nota < 3 && nota >= 0){
        return "Reprovado"
    }else if(nota >= 3 && nota < 7){
        return "Recuperação"
    }else{
        return "Valor inválido"
    }
}
console.log(verificaAprovacao(2))

// Crie uma função anônima que receba:
// o nome, sobrenome e a ordem de apresentação.
// Se a ordem for "direita" deverá apreentar nome e sobrenome;
// Se a ordem for "inversa" deverá apresentar sonrenome e nome.

const formatarNome = function(nome, sobrenome, ordem) {
    if (ordem === "inversa") {
        return `${sobrenome} ${nome}`;
    } else if (ordem === "direita") {
        return `${nome} ${sobrenome}`;
    } else {
        return "Ordem não reconhecida";
    }
};

// Testando
console.log(formatarNome("João", "Silva", "direita"));  // Saída: "João Silva"
console.log(formatarNome("Maria", "Souza", "inversa")); // Saída: "Souza Maria"



// Crie uma função anônima que receba:
// o nome, sobrenome e a ordem de apresentação.
// Se a ordem for "direita" deverá apreentar nome e sobrenome;
// Se a ordem for "inversa" deverá apresentar sonrenome e nome.


const verificarNomeCompleto = function(nome, sobrenome, ordem){
    if(ordem.toLowerCase() === "direita"){
        return `${nome} ${sobrenome}`
    }else if(ordem.toLowerCase() === "inversa"){
        return `${sobrenome} ${nome}`
    }else{
        return `Valor inválido!`
    }
}

// Testando
console.log(verificarNomeCompleto("Pedro", "Alves", "direita")); // Saída: "Pedro Alves"
console.log(verificarNomeCompleto("Ana", "Clara", "inversa"));  // Saída: "Clara Ana"

// Crie uma função anônima que receba:
// o nome, sobrenome e a ordem de apresentação.
// Se a ordem for "direita" deverá apreentar nome e sobrenome;
// Se a ordem for "inversa" deverá apresentar sonrenome e nome;
// Se o nome tiver menos de 2 letras, aparecer a mensagem: o nome não pode ser cadastrado
// se for um nome com número,  aparcer a mensagem: o nome não pode ser cadastrado

const formatarCadastro = function(nome, sobrenome, ordem) {
    // Verifica se tem algum dígito numérico (0 a 9) no nome
    const temNumero = /\d/.test(nome);

    // 1. Validação: Nome curto OU Nome com número
    if (nome.length < 2 || temNumero) {
        return "o nome não pode ser cadastrado";
    }

    // 2. Lógica de Apresentação
    if (ordem === "inversa") {
        return `${sobrenome} ${nome}`;
    } else if (ordem === "direita") {
        return `${nome} ${sobrenome}`;
    } else {
        return "Tipo de ordem não especificado corretamente";
    }
};

// --- TESTES ---

// Cenário 1: Sucesso (Direita)
console.log(formatarCadastro("Carlos", "Drummond", "direita"));
// Saída: "Carlos Drummond"

// Cenário 2: Sucesso (Inversa)
console.log(formatarCadastro("Machado", "de Assis", "inversa"));
// Saída: "de Assis Machado"

// Cenário 3: Erro (Nome muito curto - 1 letra)
console.log(formatarCadastro("A", "Silva", "direita"));
// Saída: "o nome não pode ser cadastrado"

// Cenário 4: Erro (Nome contendo número)
console.log(formatarCadastro("Jo4o", "Souza", "direita"));
// Saída: "o nome não pode ser cadastrado"


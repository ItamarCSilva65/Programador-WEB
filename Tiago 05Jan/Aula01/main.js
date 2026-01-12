// Funções

//const nome = "Itamar"
//const sobrenome = "Correia"

//const nomeCompleto = nome + " " + sobrenome

//console.log(nomeCompleto)

//.=.=.=.

// function criaNomeCompleto(nome, sobrenome){
//     const nomeCompleto = nome + " " + sobrenome
//     console.log(nomeCompleto)
// }

//criaNomeCompleto("Tiago", "Barreto") // executar a função

// function dobraNumero(numero){
//      const dobraNumero = numero * 2
//      console.log(dobraNumero)
// }

// dobraNumero(25)

// .=.=.=.

// function dobraNumero(numero){
//     const dobraNumero = numero * 2
//     console.log(dobraNumero)
// }

// // const resultado = dobraNumero(25) + 10
// // console.log(resultado)

// console.log(dobraNumero(25))


// function dobraNumero(numero){
//     const dobraNumero = numero * 2
//     // console.log(dobraNumero)
//     return dobraNumero
// }

// const resultado = dobraNumero(25) + 10
// console.log(resultado)

// Criar uma função que receba um número e retorne a metade desse número


// function metadeNumero(numero) {
//     const metade = numero / 2
//     console.log(metade)
//     return metade
// }

// const resultado = metadeNumero(25)
// console.log(resultado) // O resultado será 12.5


// Criar uma função que receba um número e retorne a metade desse número
// Se o valor for maior que 200, retornar uma mensagem de erro
// Se o valor for negativo, retornar uma mensagem informando que não é possível calcular numero negativo

// function metadeNumero(numero) {
//     // Verifica se o valor é maior que 200
//     if (numero > 200) {
//         return "Erro: O valor informado é maior que 200";
        
//     }

//     const metade = numero / 2
//     console.log(metade)
//     return metade
// }

// // Teste com valor dentro do limite
// const resultado = metadeNumero(25)
// console.log(resultado) // Saída: 12.5

// // Teste com valor acima do limite
// const resultadoErro = metadeNumero(300)
// console.log(resultadoErro) // Saída: "Erro: O valor informado é maior que 200"



// Criar uma função que receba um número e retorne a metade desse número
// Se o valor for maior que 200, retornar uma mensagem de erro
// Se o valor for negativo, retornar uma mensagem informando que não é possível calcular numero negativo

// function metadeNumero(numero) {
     // Se o valor for maior que 200, retornar uma mensagem de erro
//     if (numero > 200) {
//         return "Erro: O valor informado é maior que 200";
//     }
    
    // Se o valor for negativo, retornar uma mensagem informando que não é possível calcular numero negativo
//     if (numero < 0) {
//         return "Erro: Não é possível calcular número negativo";
//     }

//     const metade = numero / 2
//     console.log(metade)
//     return metade
// }

// Exemplos de uso:

// const resultado = metadeNumero(25)
// console.log(resultado) // Saída: 12.5

// const resultadoErroLimite = metadeNumero(210)
// console.log(resultadoErroLimite) // Saída: "Erro: O valor informado é maior que 200"

// const resultadoErroNegativo = metadeNumero(-15)
// console.log(resultadoErroNegativo) // Saída: "Erro: Não é possível calcular número negativo"



// Crie uma função que calcule um novo salário de um funcionário a partir do seu cargo.
// Analista (salário: 2500), Supervisor (salário: 3500)
//Se for analista, tem bonus de 250 reais, se supervisor 400 reais

// function calcularNovoSalario(cargo) {
//     let salarioBase;
//     let bonus;

//     if (cargo.toLowerCase() === 'analista') {
//          salarioBase = 2500;
//          bonus = 250;
// } else if (cargo.toLowerCase() === 'supervisor') {
//          salarioBase = 3500;
//          bonus = 400;
// } else {
//         return "Cargo não reconhecido."; // Caso o cargo informado não seja válido
//      }

//      const novoSalario = salarioBase + bonus;
//      return `O novo salário para o cargo de ${cargo} é de R$ ${novoSalario.toFixed(2)}`;
// }

// Exemplos de uso:
// console.log(calcularNovoSalario('Analista'));
// console.log(calcularNovoSalario('Supervisor'));
// console.log(calcularNovoSalario('Gerente')); // Teste com cargo inválido



// Crie uma função que calcule um novo salário de um funcionário a partir do seu cargo.
// Analista (salário: 2500), Supervisor (salário: 3500)
//Se for analista, tem bonus de 250 reais, se supervisor 400 reais

// function calcularNovoSalarioSwitch(cargo) {
//     let salarioBase;
//     let bonus;

//     switch (cargo.toLowerCase()) {
//         case 'analista':
//             salarioBase = 2500;
//             bonus = 250;
//             break;
//         case 'supervisor':
//             salarioBase = 3500;
//             bonus = 400;
//             break;
//         default:
//             return "Cargo não reconhecido.";
//     }

//     const novoSalario = salarioBase + bonus;
//     return `O novo salário para o cargo de ${cargo} é de R$ ${novoSalario.toFixed(2)}`;
// }

// Exemplos de uso:
// console.log(calcularNovoSalarioSwitch('Analista'));
// console.log(calcularNovoSalarioSwitch('Supervisor'));
// console.log(calcularNovoSalarioSwitch('Coordenador')); // Teste com cargo inválido



// Crie uma função que calcule um novo salário de um funcionário a partir do seu cargo.
// Analista (salário: 2500), Supervisor (salário: 3500)
//Se for analista, tem bonus de 250 reais, se supervisor 400 reais

function calculaSalário(cargo){
    let salario

    if(cargo == "Analista"){
        salario = 2500 + 250
        return salario
    }
    if(cargo == "Supervisor"){
        salario = 3500 + 400
        return salario
    }
    if(cargo != "Analista" || cargo != "Supervisor"){
        return "O cargo inserido é inválido"
    }
}

console.log(calculaSalário("Analista"))
console.log(calculaSalário("Supervisor"))
console.log(calculaSalário("Engenheiro"))







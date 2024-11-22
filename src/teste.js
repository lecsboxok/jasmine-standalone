// //EXEMPLO
// function inteiro(inteiro){
//     if (inteiro % 3 == 0) {
//         return "Fizz";
//     }
//     if (inteiro % 5 == 0) {
//         return "Buzz";
//     }
//     return inteiro;
// };

// function escola(nota) {
//     if (nota >= 7) {
//         return "Aprovado";
//     } else {
//         return "Reprovado";
//     }
// }

//EXERCÍCIO
//Exercícios 1
function multipicacao(a, b, c) {
    return a * b * c;
}

//Exercícios 2
function dividir(a, b) {
    if (b == 0) {
        return "Não é possível divir por 0";
    } else {
        return a / b;
    }
}

//Exercícios 3
function celsiusFahrenheit(C) {
    return C * 1.8 + 32;
}
function fahrenheitCelsius(F) {
    return (F - 32) / 1.8;
}

//Exercícios 4
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

//Exercícios 5
function contarCaracteres(a) {
    return a.length;
}

//Exercícios 6
function calculadora(a, b, c) {
    switch (c) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if (b == 0){
                return "Não é possível dividir por 0"
            } else {
                return a / b;
                break;
            }
        default:
            return "Não é um operador matemático";
    }
}
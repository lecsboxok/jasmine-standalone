// //EXEMPLO
// it("Teste: Fizz Buzz", function () {
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe("Fizz");
//     expect(inteiro(4)).toBe(4);
//     expect(inteiro(5)).toBe("Buzz");
//     expect(inteiro(6)).toBe("Fizz");
//     expect(inteiro(7)).toBe(7);
//     expect(inteiro(8)).toBe(8);
//     expect(inteiro(9)).toBe("Fizz");
//     expect(inteiro(10)).toBe("Buzz");
// });

// it("Teste: Situação do aluno", function() {
//     expect(escola(5)).toEqual("Reprovado");
//     expect(escola(9)).toEqual("Aprovado");
// })

//EXERCÍCIO
//Exercícios 1
it("Teste: Multiplicação de três números", function() {
    expect(multipicacao(5, 4, 2)).toBe(40);
    expect(multipicacao(7, 3, 6)).toBe(126);
    expect(multipicacao(0, 1, 8)).toBe(0);
})

//Exercícios 2
it("Teste: Divisão", function() {
    expect(dividir(6, 2)).toBe(3);
    expect(dividir(20, 4)).toBe(5);
    expect(dividir(4, 0)).toBe("Não é possível divir por 0");
})

//Exercícios 3
it("Teste: Conversão", function() {
    expect(celsiusFahrenheit(29)).toBe(84.2);
    expect(fahrenheitCelsius(84.2)).toBe(29);
})

//Exercícios 4
it("Teste: Média", function() {
    expect(calcularMedia(6, 7, 5)).toBe(6);
    expect(calcularMedia(8, 9, 10)).toBe(9);
})

//Exercícios 5
it("Teste: Contador de caracteres", function() {
    expect(contarCaracteres("12345")).toBe(5);
    expect(contarCaracteres("hello")).toBe(5);
})

//Exercícios 6
it("Teste: Calculadora", function() {
    expect(calculadora(1, 2, "+")).toBe(3)
    expect(calculadora(12, 5, "-")).toBe(7)
    expect(calculadora(5, 0, "/")).toBe("Não é possível dividir por 0")
    expect(calculadora(4, 25, "*")).toBe(100)
})

// let hora = 3;
// let saldo = 500;
// let valor = 200;
// console.log(hora >= 20);
// console.log(hora < 6);
// console.log(hora >= 20 || hora < 6);
// console.log(hora >= 20 && hora < 6);
// console.log(valor > 0 && valor <= saldo);

/*
    esse sinal || é o operador logico OU, que em uma condição, qualquer um dos lados for verdadeiro,
    o resultado é verdadeiro.

    esse sinal && é o operador lógico E, que em uma condição, obriga que os dois lados sejam verdadeiros
    ou falsos para dar verdadeiro.
*/
let hora= 23;
let saldo = 500;
let valor = 200;

console.log("A resposta é: ", hora >= 20) // false
console.log("A resposta é: ", hora < 6) // true
console.log("A resposta é: ", hora >= 20 || hora < 6) // true
console.log("A resposta é: ", hora >= 20 && hora < 6) // false
console.log("A Resposta é: ", valor > 0 && valor <= saldo) // true

if(hora >= 20 || hora > 6){
    console.log("Aqui") // caminho VERDADEIRO (TRUE)
}else {
    console.log("Ou aqui") // caminho FALSO (FALSE)
}

function Fibonacci(num) {
    
    let a = 0;
    let b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

const numero = parseInt(prompt("Digite algum número: "));

if (Fibonacci(numero)) {
    console.log(`O número ${numero} pertence a sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence a sequência de Fibonacci.`);
}

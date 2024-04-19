let invertido = '';
let entrada = prompt("Digite uma string:");

for (let i = entrada.length - 1; i >= 0; i--) {
    invertido += entrada[i];
}

console.log(invertido);

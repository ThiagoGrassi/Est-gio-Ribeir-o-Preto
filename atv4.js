function inverter(string) {
    let invertido = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
        invertido += string[i];
    }
  
    return invertido;
}

let entrada = prompt("Digite uma string:");
let resultado = inverter(entrada);
console.log("String invertida:", resultado);

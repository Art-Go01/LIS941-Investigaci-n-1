const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora en Node.js");
console.log("Opciones: + - * / ecuacion");

rl.question('Seleccione la operación (+, -, *, /, ecuacion): ', (operacion) => {
    if (operacion === 'ecuacion') {
        rl.question('Ingrese el coeficiente a: ', (a) => {
            rl.question('Ingrese el coeficiente b: ', (b) => {
                rl.question('Ingrese el coeficiente c: ', (c) => {
                    const A = parseFloat(a);
                    const B = parseFloat(b);
                    const C = parseFloat(c);
                    
                    const res = B * B - 4 * A * C;
                    
                    if (res > 0) {
                        const x1 = (-B + Math.sqrt(res)) / (2 * A);
                        const x2 = (-B - Math.sqrt(res)) / (2 * A);
                        console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
                    } else if (res === 0) {
                        const x = -B / (2 * A);
                        console.log(`La solución única es: x = ${x}`);
                    } else {
                        const realPart = (-B / (2 * A)).toFixed(2);
                        const imaginaryPart = (Math.sqrt(-res) / (2 * A)).toFixed(2);
                        console.log(`Las soluciones imaginarias son: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`);
                    }
                    rl.close();
                });
            });
        });
    } else {
        rl.question('Ingrese el primer número: ', (num1) => {
            rl.question('Ingrese el segundo número: ', (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let resultado;

                switch (operacion) {
                    case '+':
                        resultado = a + b;
                        break;
                    case '-':
                        resultado = a - b;
                        break;
                    case '*':
                        resultado = a * b;
                        break;
                    case '/':
                        resultado = b !== 0 ? a / b : 'Error: División por 0';
                        break;
                    default:
                        resultado = 'Operador no válido';
                }

                console.log(`Resultado: ${resultado}`);
                rl.close();
            });
        });
    }
});

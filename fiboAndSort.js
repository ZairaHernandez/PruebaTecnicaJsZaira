//1.Create an algorithm that displays n number of digits of the fibonacci series,
// e.g.: input fibo(5), output "0,1,1,2,3".
//Extra if you can do it with recursion

//Serie fibonacci con recursividad
let fibonacci = function (primero, ultimo, numero) { 
    var actual;
    console.log(ultimo);
    if (numero > 1) { //Caso base
        actual = primero + ultimo; // Sumamos los fibonnacci anteriores
        numero--;
        fibonacci(ultimo, actual, numero); //Calculamos con el nuevo valor de numero
    }
    
}
var fibo = function (numero) { 
    return fibonacci(0, 1, numero); //Llamada de la función fibonacci, es estetico
}
console.log(fibo(6));


// 2.Rearrange this array with the values from smallest to largest without using the sort method,
// Ex: input [1,4,5,12,7,23,12,12] output: [1,2,4,7,12,12,23].
// Ordenamiento quickSort
let ordenar =  (arreglo) => { 
    if (arreglo.length == 0) { return [] } //Evaluamos si el arreglo no tiene registros
    if (arreglo.length < 2) { return arreglo } //evaluamos si el arreglo es de 1 registro
    
    let mitadArreglo = Math.floor(arreglo.length / 2); //Mitad del arreglo
    let pivote = arreglo[mitadArreglo]; //Obtenemos el número de la mitad del arreglo
    let arregloIzquierda = [];
    let arregloDerecha = [];

    
    for (let i = 0; i < arreglo.length; i++){
        if (i != mitadArreglo) {
            if (arreglo[i] > pivote) { //Si numero es mayor al pivote entonces..
                arregloDerecha.push(arreglo[i]); //Agregamos al arreglo de la derecha
            } else {
                arregloIzquierda.push(arreglo[i]); //Agregamos al arreglo de la izquierda
            }
        }
    }
    return ordenar(arregloIzquierda).concat(pivote).concat(ordenar(arregloDerecha)); //Empleamos recursividad volviendo a acomodar lo que nos salió de los otros arreglos y concatenamos
}
//let arreglo = [6, 7, 4, 2, 1, 9, 2];
//console.log(ordenar(arreglo));



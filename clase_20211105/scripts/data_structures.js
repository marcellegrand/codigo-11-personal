//ARREGLOS Y MATRICES
let numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let nombres = ['marcel', 'rocío', 'paúl', 'lisseth'];
let matriz = [['zero',1,2,3],0,[0,1,2,3],[4,5,6,7]];

console.log(numeros[0]);
console.log(nombres[1]);
console.log(matriz[2]);
console.log(matriz[3][2]);

//OBJETOS
let alumno = {
    nombre: 'Marcel',
    apellido: 'Lazo de la Vega',
    edad: 43,
    sexo: 'M',
    getName: function() {
        return this.nombre;
    },
    getFullName: function() {
        return `${this.nombre}  ${this.apellido}`;
    }
};
//INFORMACIÓN PERSISTE SOLO EN LA PESTAÑA. SE CIERRA ESTA Y SE LIMPIA TODO
sessionStorage.setItem('usuario','mlazodelavega');
console.log(sessionStorage.getItem('usuario'));
console.log(sessionStorage);
sessionStorage.setItem('usuario','rvizcarra');
console.log(sessionStorage.getItem('usuario'));
sessionStorage.removeItem('usuario');

//INFORMACIÓN PERSISTE EN TODO EL NAVEGADOR. SE CIERRA ESTE Y SE LIMPIA TODO
localStorage.setItem('usuario','mlazodelavega');
console.log(localStorage.getItem('usuario'));
console.log(localStorage);
localStorage.setItem('usuario','rvizcarra');
console.log(localStorage.getItem('usuario'));
localStorage.removeItem('usuario');

//SE RECOMIENDA USAR JSON.stringify PARA GUARDAR ARREGLOS, OBJETOS, ETC
const numeros = [1,2,3,4,5];
sessionStorage.setItem('arreglo',JSON.stringify(numeros));
console.log(JSON.parse(sessionStorage.getItem('arreglo')));

const persona = {
    nombre: 'Marcel',
    apellido: 'Lazo de la Vega'
};
sessionStorage.setItem('objeto',JSON.stringify(persona));
console.log(JSON.parse(sessionStorage.getItem('objeto')));


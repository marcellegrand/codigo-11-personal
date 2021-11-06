const MIN_AGE = 18;
const AVOID_SEX = 'F';

function Welcome(name) {
    return `Bienvenido al bar: ${name}`;
}

function notWelcome(name) {
    return `No eres bienvenido al bar: ${name}`;
}

function notSupportedAge(name) {
    return `Eres menor de edad: ${name}`;
}

function theBar() {
    //debuger;
    let nombre = prompt('Ingresa tu nombre');
    let edad = Number(prompt('Ingresa tu edad'));
    let sexo = prompt('Ingresa tu sexo');

    if (edad >= MIN_AGE && sexo.toLocaleUpperCase() != AVOID_SEX) {
        alert(Welcome(nombre));
    } else if (edad < MIN_AGE) {
        alert(notSupportedAge(nombre));
    } else {
        alert(notWelcome(nombre));
    }
}

theBar();
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

//theBar();

function saveName(nombre) {
    let mensaje = '';

    try {
        if (nombre.length < 6) throw 'ERROR_SHORT';
        if (nombre.length > 12) throw 'ERROR_LONG';

        mensaje = `El nombre ${nombre} es correcto, cumple las condiciones`;
    } catch (err) {
        if (err == 'ERROR_SHORT') {
            mensaje = `El nombre ${nombre} es CORTO`;
        };
        if (err == 'ERROR_LONG') {
            mensaje = `El nombre ${nombre} es LARGO`;
        };
    } finally {
        console.log('Nombre evaluado: ',mensaje);
    }
}

saveName('Marcel');
saveName('Marifersolange');
saveName('Ana');
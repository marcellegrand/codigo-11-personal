let variableUno = 10;
let variableDos = 20;
let variableTres = 30;
let variableCuatro = 40;

console.log(variableUno);
console.log(variableDos);

let oneNameGlobal = 'Function FN';

function fnOne() {
    let nameOne = "Marcel";
    let nameTwo = "Johan";

    console.log('nameOne',nameOne);
    console.log('nameTwo',nameTwo);
    console.log('oneNameGlobal en fnOne',oneNameGlobal);
}

function fnTwo() {
    let numberOne = 3.1416;
    let numberTwo = 6.2832;

    console.log('numberOne',numberOne);
    console.log('numberTwo',numberTwo);
    console.log('oneNameGlobal en fnTwo',oneNameGlobal);    
}

fnOne();
fnTwo();


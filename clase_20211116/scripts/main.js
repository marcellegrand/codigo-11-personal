//OBJECTS METHODS
const oObject_01 = {
    name: 'Marcel',
    lastname: 'Lazo de la Vega'
};

const oObject_02 = {
    wheels: 4,
    motor: 'Diesel'
};

const oObject_03 = {
    Manufacturer: 'Sony',
    name: 'PlayStation 5',
    cpu: 2,
    gpu: 2
};

const oCopy = Object.assign({},oObject_01,oObject_02,oObject_03);
console.log('Object.assign',oCopy);

console.log('Object.keys',Object.keys(oCopy));
console.log('Object.name',Object.entries(oCopy));

const aSample_01 = ['Nintendo','Sony','Microsoft','Sega'];
console.log('Array length',aSample_01.length);

let aSample_02 = new Array('Nintendo','Sony','Microsoft','Sega');
console.log('Array length',aSample_02.length);

let aSample_03 = new String('Nintendo','Sony','Microsoft','Sega');
console.log('Array length',aSample_02.length);

//WINDOW METHODS
setTimeout(() => {
    alert('Pasaron 10 segundos');
    window.open('http://127.0.0.1:5501/calculator.html','_blank');
},10000);


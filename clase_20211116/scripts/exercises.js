//EJERCICIO 01
/*
let aNames = [];
let nIterator;

for (nIterator = 0; nIterator < 10; nIterator++) {
    aNames[nIterator] = prompt(`Ingrese el nombre [${nIterator+1}]`);
};

alert('Names entry complete!');

aNames.map((x) => {
    console.log(x);
});
*/

//EJERCICIO 02
let aPeople = [{}];
let fData = document.getElementById('frmData');

fData.onsubmit = function(event) {
    event.preventDefault();

    let oName = document.getElementById('txtName');
    let oLastName = document.getElementById('txtLastName');
    let oAge = document.getElementById('txtAge');
    
    aPeople.push({
        name: oName.value,
        lastname: oLastName.value,
        age: oAge.value
    });

    this.reset();
};

document.getElementById('btnPrint').onclick = function(btnPrint) {
    btnPrint.preventDefault();
    aPeople.map((x) => {
        console.log(x);
    })
}



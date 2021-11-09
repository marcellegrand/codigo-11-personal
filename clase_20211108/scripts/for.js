//ARREGLO DE OBJETOS
const users = [
    {
        id: 1,
        name: 'Marcel',
        lastname: 'Lazo de la Vega',
        age: 43
    },
    {
        id: 2,
        name: 'Rocío',
        lastname: 'Vizcarra',
        age: 39
    },
    {
        id: 3,
        name: 'Antonio',
        lastname: 'Lazo de la Vega',
        age: 47
    },
    {
        id: 4,
        name: 'Rosario',
        lastname: 'Vizcarra',
        age: 48
    },
    {
        id: 5,
        name: 'Paúl',
        lastname: 'Lazo de la Vega',
        age: 43
    },
    {
        id: 6,
        name: 'Juanjo',
        lastname: 'Vizcarra',
        age: 46
    }
];

for (let nPosition = 0; nPosition < users.length; nPosition++) {
    console.log(users[nPosition].name, users[nPosition].lastname);
}

for (let nPosition = 0; nPosition < users.length; nPosition++) {
    console.log(`${users[nPosition].name} ${users[nPosition].lastname}`);
}

//ARREGLO DE ARREGLOS
const numbers = [
    [1,4,6,4,1],
    [1,3,3,1],
    [1,2,1],
    [1,1],
    [1],
];

for (let nRow = 0; nRow < numbers.length; nRow++) {
    for (let nCol = 0; nCol < numbers[nRow].length; nCol++) {
        console.log(numbers[nRow][nCol]);
    }
}
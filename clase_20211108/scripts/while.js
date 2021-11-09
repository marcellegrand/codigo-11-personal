let nCounter = 10;
while (nCounter > 0) {
    console.log(nCounter);
    nCounter--;
}

do {
    console.log(nCounter);
    nCounter++;
} while (nCounter <= 10)

//Recorriendo propiedades de un objeto
const videogames_console = {
    brand: 'Sony',
    model: 'PlayStation 5',
    price: '800 USD',
    controllers: 1,
    hdmi: true
}

for (const key in videogames_console) {
    console.log(`key: ${key}; value: ${videogames_console[key]}`);
}
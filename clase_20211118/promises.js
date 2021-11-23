async function prueba() {
    const promesa = new Promise(function(resolve,reject) {
        setTimeout(() => {
            //resolve([0,1,2,3,4]);
            resolve('hello world');
            //reject('not working');
        },2000);
    });

    try {
        const response = await promesa;
        console.log('Response:',response);
    } catch (e) {
        console.log('Error:',e);
    }
};

prueba();
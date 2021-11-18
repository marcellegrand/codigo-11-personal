function createPeople(aPeople) {
    JSON.parse(aPeople).results.map((oPerson) => {
        const card = document.createElement('article');
        card.innerHTML = `
            <p>Nombre: ${oPerson.name}</p>
            <p>Altura: ${oPerson.height}</p>
            <button>Mostrar FILMS</button>
        `;

        document.querySelector('#Container').appendChild(card);
    });
};

function getResponse() {
    createPeople(xhr.response);
};

function showError() {
    alert('Error desconocido en carga. Intentar más adelante');
};

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.dev/api/people');
xhr.send(null);
xhr.onload = getResponse;
xhr.onerror = showError;
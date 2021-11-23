function listStudents() {
    fetch('http://localhost:3000/alumnos')
    .then((response) => response.json());
    .then((students) => {
        students.map((student) => {
            makeCard(student);
        })
    });
};

function makeCard(student) {
    const {name, lastname, age} = student;

    const article = document.createElement('article');
};
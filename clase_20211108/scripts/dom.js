const h1 = document.querySelector('h1');

h1.textContent = 'TEXTO MODIFICADO DESDE JS';
h1.style.color = 'red';
h1.style.fontSize = '100px';
h1.style.background = 'orange';

h1.ondblclick = function() {
    this.style.fontSize = `${Number(this.style.fontSize.replace('px','')) + 2}px`;
}

h1.onmouseenter = function() {
    console.log('Entró');
    this.style.background = 'pink';
}

h1.onmouseout = function() {
    console.log('Salió');
    this.style.background = 'turquoise';
}

function SubmitForm() {
    let form = document.querySelector('form');
    const inputName = document.querySelector('.js_name');
    const inputEmail = document.querySelector('.js_email');
    const inputPassword = document.querySelector('.js_password');

    form.onsubmit = function(event) {
        event.preventDefault();
        console.log('Nombre: ', inputName.value);
        console.log('Email: ', inputEmail.value);
        console.log('Password: ', inputPassword.value);
    }
}

const list = document.querySelectorAll('li');
for (let nIndex = 0; nIndex < list.length; nIndex++) {
    list[nIndex].style.color = 'yellow';
    list[nIndex].style.background = 'purple';
}

//SELECTORES RELATIVOS
const ul = document.querySelector('ul');
console.log('CHILDNODES', ul.childNodes);
console.log('CHILDREN',ul.children);
console.log('FIRSTCHILD',ul.firstChild);
console.log('FIRSTELEMENTCHILD',ul.firstElementChild);
console.log('LASTCHILD',ul.lastChild);
console.log('LASTELEMENTCHILD',ul.lastElementChild);
console.log('NEXTELEMENTSIBLING',ul.firstElementChild.nextElementSibling);
console.log('PREVIOUSELEMENTSIBLING',ul.previousElementSibling);
console.log('PARENT',ul.parentElement);
console.log('PARENT',ul.firstElementChild.parentElement);




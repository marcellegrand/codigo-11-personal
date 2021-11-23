//HEMOS COMENTADO TODO ESTO A PROPÓSITO.
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

//BORRAMOS TAMBIÉN TODOS LOS FICHEROS DE ./src  A EXCEPCIÓN DE index.css e index.js

import React from 'react'; //Importando la librería react
import ReactDOM from 'react-dom'; //Importador de funcionalidad para renderizar elementos en el virtual dom
import './index.css'; //Importando css en js

function Header() {
  return <header>HEADER</header>;
}

function Main(props) { //props: Abreviación de propiedades o properties
  //const { children } = props; //Deestructuración del objeto
  return <main>{props.children}</main>;
}

function Footer() {
  return <footer>FOOTER</footer>;
}

function Card() {
  return <article>CARD</article>;
}

function App() {
  return (
    <idv className="app">
      {/*{Header()}*/}
      <Header />
      {/*{Main()}*/}
      <Main>
        Any text or component here!
        <Card />
        <Card />
        <Card />
        <Card />
        {new Date().toLocaleTimeString()}
      </Main>
      {/*{Footer()}*/}
      <Footer />
    </idv>
  )
}

//ReactDOM.render(<h1>HOLA MUNDO</h1>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
setInterval(App,1000);

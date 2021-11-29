import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

function Header() {
  return <header>HEADER</header>;
};

function Main(props) {
  const {children} = props;
  return <main>{children}</main>;
};

function Footer() {
  return <footer>FOOTER</footer>;
};

function Card(props) {
  const {name, lastname, age} = props;

  return (
    <article>
      Nombre completo: <h2>{name} {lastname}</h2>
      Edad: <h2>{age}</h2>
    </article>
  )
};

function SayGreetings(props) {
  const {name = 'Marcel', sex = 'M'} = props;

  return (
    <div>
      {name === 'Marcel' ? <h2>¡Te conozco! :-)</h2> : <h2>¡No te conozco! :-(</h2>}
      {sex == 'M' && <h2>¡Eres varón!</h2>}
      {sex == 'F' && <h2>¡Eres mujer!</h2>}
    </div>
  );
};

function App() {
  //Siempre se debe retornar los elementos DENTRO DE UN SOLO PADRE.
  //Por eso estamos usando acá un <div>. Y se usa en él className (no class)
  //para evitar entrar en conflicto con con la palabra reservada class
  // return (
  //   <div className="Container">
  //   <Header />
  //   <Main>
  //     <p>Marcel</p>
  //     <p>Rocío</p>
  //     <p>Piti</p>
  //     <p>Jodi</p>
  //   </Main>
  //   <Footer />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Card name="Marcel" lastname="Lazo de la Vega Velarde" age="43"/>
  //     <Card name="Rocío" lastname="Vizcarra Bellido" age="39"/>
  //     <Card name="Juan Pablo" lastname="Lazo de la Vega Ordóñez" age="8"/>
  //     <Card name="José Ignacio" lastname="Lazo de la Vega Ordóñez" age="4"/>
  //   </div>
  // );

  const users = [
    {
      name: 'Marcel',
      lastname: 'Lazo de la Vega', 
      age: 43
    },
    {
      name: 'Rocío',
      lastname: 'Vizcarra', 
      age: 39
    },
    {
      name: 'Juan Pablo',
      lastname: 'Lazo de la Vega', 
      age: 8
    },
    {
      name: 'José Ignacio',
      lastname: 'Lazo de la Vega', 
      age: 4
    }
  ];

  return (
    <div>
      <Header />
      <Main>
        {users.map((user) => (
          <Card name={user.name} lastname={user.lastname} age={user.age} />
        ))}

          <SayGreetings name="Rocío" sex="F" />
          <SayGreetings sex="M" />
      </Main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Laborum consequat laborum mollit veniam culpa nulla amet pariatur.</h1>
      <Testimonio
        nombre = 'Sarah G.'
        imagen = 'photo-first-testimonio'
        cargo = 'Ingieneria de software'
        testimonio = 'Nulla sint nulla eu incididunt duis est elit aliquip proident eu amet eiusmod eu. Dolor pariatur consequat ullamco id elit. Pariatur ullamco eu incididunt in. Lorem deserunt aliqua ut ut non. Nostrud culpa duis nisi veniam eiusmod amet sunt excepteur labore laboris enim enim aute.Occaecat dolor sunt sint deserunt tempor tempor. Dolor irure eu enim aute occaecat ad minim tempor voluptate. Irure deserunt duis magna elit.'
      />
      <Testimonio
        nombre = 'Daniela F.'
        imagen = 'photo-second-testimonio'
        cargo = 'Ingieneria de software'
        testimonio = 'Nulla sint nulla eu incididunt duis est elit aliquip proident eu amet eiusmod eu. Dolor pariatur consequat ullamco id elit. Pariatur ullamco eu incididunt in. Lorem deserunt aliqua ut ut non. Nostrud culpa duis nisi veniam eiusmod amet sunt excepteur labore laboris enim enim aute.Occaecat dolor sunt sint deserunt tempor tempor. Dolor irure eu enim aute occaecat ad minim tempor voluptate. Irure deserunt duis magna elit.'
      />
        <Testimonio
        nombre = 'Rafaela P.'
        imagen = 'photo-three-testimonio'
        cargo = 'Ingieneria de software'
        testimonio = 'Nulla sint nulla eu incididunt duis est elit aliquip proident eu amet eiusmod eu. Dolor pariatur consequat ullamco id elit. Pariatur ullamco eu incididunt in. Lorem deserunt aliqua ut ut non. Nostrud culpa duis nisi veniam eiusmod amet sunt excepteur labore laboris enim enim aute.Occaecat dolor sunt sint deserunt tempor tempor. Dolor irure eu enim aute occaecat ad minim tempor voluptate. Irure deserunt duis magna elit.'
      />
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso FullStack Bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color = 'red' message='Estamos trabajando' />
      <Mensaje color = 'green' message = 'En un curso' />
      <Mensaje color = 'blue' message = 'de React' />
      <Description />
    </div>
  );
}

export default App;

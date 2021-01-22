import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [misPerros, setMisPerros] = useState(['Pachi', 'Chona', 'chuky', 'kevin'])
  const [text, setText] = useState('');

  const addItemToList = () => {
    setMisPerros([...misPerros, text])

  }


  return (
    <div className="App">
      <h1>
        Welcome
      </h1>
      <button type="button" onClick={addItemToList}>
        Click here
      </button>

      {
        show && <p>
          EL pachi
      </p>
      }

      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Search'>
      </input>

      {
        misPerros.map(item => <p key={item}>{item}</p>)
      }

    </div>
  );
}

export default App;

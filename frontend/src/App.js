import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import encodingService from './encoding-service';

function App() {
  const [encoding, setEncoding] = useState({
    original: '',
    encoded: 'Nothing to encode'
  });

  const encodeAndSet = async (value) => {
    const result = await encodingService.encode(value);
    setEncoding(result);
  };

  const headerProps = {
    title: 'Template Aceleradora',
    className: 'App-header'
  };

  return (
    <div className="App">
      <Header {...headerProps} />

      <main className="App-content">
        <p> {encoding.original} </p>
        <p> {encoding.encoded} </p>
        <input type="text" onChange={(event) => encodeAndSet(event.target.value)} />
      </main>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';

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

    return (
        <div className="App">
            <header className="App-header">
                <p> {encoding.original} </p>
                <p> {encoding.encoded} </p>
                <input type="text" onChange={(event) => encodeAndSet(event.target.value)}/>
            </header>
        </div>
    );
}

export default App;

import React from 'react';
import Button from './components/button';
import TextField from './components/text-field';

const App: React.FC = () => {
    return (
      <main>
        <h1>Mano pirmoji aplikacija</h1>
        <Button color='warning'>Pirmas</Button>
        <Button color='error'>Antras</Button>
        <Button color='secondary'>Trecias</Button>
        <Button color='primary'>Ketvirtas</Button>
        <TextField color='secondary'></TextField>
      </main>
    )
  ;
}

export default App;

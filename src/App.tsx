import React from 'react';
import Button from './components/button';
import TextField from './components/text-field';

const App: React.FC = () => {
    return (
      <main>
        <h1>Mano pirmoji aplikacija</h1>
        <Button>Pirmas</Button>
        <Button>Antras</Button>
        <Button>Trecias</Button>
        <TextField></TextField>
      </main>
    )
  ;
}

export default App;

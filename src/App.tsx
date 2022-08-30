import React from 'react';
import Button from './components/button';

const App: React.FC = () => {
    return (
      <main>
        <h1>Mano pirmoji aplikacija</h1>
        <Button>Pirmas</Button>
        <Button>Antras</Button>
        <Button>Trecias</Button>
      </main>
    )
  ;
}

export default App;

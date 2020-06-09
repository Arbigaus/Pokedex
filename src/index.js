import React, { useState } from 'react';
import Index from '../routes';
import Context from './context';

const App = () => {
  const [pokemonEntries, setPokemonEntries] = useState([]);
  return (
    <Context.Provider value={{ pokemonEntries, setPokemonEntries }}>
      <Index />
    </Context.Provider>
  );
};

export default App;

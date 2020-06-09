import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from '../context';

import Screens from '../src/screens';

const Stack = createStackNavigator();

const { Home, Pokemon } = Screens;

const Index = () => {
  const [pokemonEntries, setPokemonEntries] = useState([]);
  const [fullPokeList, setFullPokeList] = useState([]);
  const [pokeData, setPokeData] = useState({});

  return (
    <Context.Provider
      value={{
        pokemonEntries,
        setPokemonEntries,
        pokeData,
        setPokeData,
        fullPokeList,
        setFullPokeList,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokemon">
            {(props) => <Pokemon {...props} pokeData={pokeData} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Index;

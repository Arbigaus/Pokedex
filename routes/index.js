import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from '../src/screens';

const { Home, Pokemon } = Screens;
const Index = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      Pokemon,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default Index;

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from '../src/screens';

const Index = createAppContainer(
  createSwitchNavigator(
    {
      Home: Screens.Home,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default Index;

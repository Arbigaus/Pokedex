import React from 'react';

import BugSelected from '../assets/icons/Icon/Bug/Selected.svg';
import BugUnselected from '../assets/icons/Icon/Bug/Unselected.svg';
import BugWhite from '../assets/icons/Icon/Bug/White.svg';
import DarkSelected from '../assets/icons/Icon/Dark/Selected.svg';
import DarkUnselected from '../assets/icons/Icon/Dark/Unselected.svg';
import DarkWhite from '../assets/icons/Icon/Dark/White.svg';
import FireSelected from '../assets/icons/Icon/Fire/Selected.svg';
import FireUnselected from '../assets/icons/Icon/Fire/Unselected.svg';
import FireWhite from '../assets/icons/Icon/Fire/White.svg';
import GrassSelected from '../assets/icons/Icon/Grass/Selected.svg';
import GrassUnselected from '../assets/icons/Icon/Grass/Unselected.svg';
import GrassWhite from '../assets/icons/Icon/Grass/White.svg';
import PoisonSelected from '../assets/icons/Icon/Poison/Selected.svg';
import PoisonUnselected from '../assets/icons/Icon/Poison/Unselected.svg';
import PoisonWhite from '../assets/icons/Icon/Poison/White.svg';

const types = {
  bug: {
    selected: <BugSelected width="100%" height="100%" />,
    unselected: <BugUnselected width="100%" height="100%" />,
    white: <BugWhite width="100%" height="100%" />,
  },
  dark: {
    selected: <DarkSelected width="100%" height="100%" />,
    unselected: <DarkUnselected width="100%" height="100%" />,
    white: <DarkWhite width="100%" height="100%" />,
  },
  fire: {
    selected: <FireSelected width="100%" height="100%" />,
    unselected: <FireUnselected width="100%" height="100%" />,
    white: <FireWhite width="100%" height="100%" />,
  },
  grass: {
    selected: <GrassSelected color="white" width="100%" height="100%" />,
    unselected: <GrassUnselected width="100%" height="100%" />,
    white: <GrassWhite width="100%" height="100%" />,
  },
  poison: {
    selected: <PoisonSelected width="100%" height="100%" />,
    unselected: <PoisonUnselected width="100%" height="100%" />,
    white: <PoisonWhite width="100%" height="100%" />,
  },
};

module.exports = { types };

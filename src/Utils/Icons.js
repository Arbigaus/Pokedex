import React from 'react';

import BugSelected from '../assets/icons/Icon/Bug/Selected.svg';
import BugUnselected from '../assets/icons/Icon/Bug/Unselected.svg';
import BugWhite from '../assets/icons/Icon/Bug/White.svg';
import DarkSelected from '../assets/icons/Icon/Dark/Selected.svg';
import DarkUnselected from '../assets/icons/Icon/Dark/Unselected.svg';
import DarkWhite from '../assets/icons/Icon/Dark/White.svg';
import DragonSelected from '../assets/icons/Icon/Dragon/Selected.svg';
import DragonUnselected from '../assets/icons/Icon/Dragon/Unselected.svg';
import DragonWhite from '../assets/icons/Icon/Dragon/White.svg';
import ElectricSelected from '../assets/icons/Icon/Electric/Selected.svg';
import ElectricUnselected from '../assets/icons/Icon/Electric/Unselected.svg';
import ElectricWhite from '../assets/icons/Icon/Electric/White.svg';
import FairySelected from '../assets/icons/Icon/Fairy/Selected.svg';
import FairyUnselected from '../assets/icons/Icon/Fairy/Unselected.svg';
import FairyWhite from '../assets/icons/Icon/Fairy/White.svg';
import FightingSelected from '../assets/icons/Icon/Fighting/Selected.svg';
import FightingUnselected from '../assets/icons/Icon/Fighting/Unselected.svg';
import FightingWhite from '../assets/icons/Icon/Fighting/White.svg';
import FireSelected from '../assets/icons/Icon/Fire/Selected.svg';
import FireUnselected from '../assets/icons/Icon/Fire/Unselected.svg';
import FireWhite from '../assets/icons/Icon/Fire/White.svg';
import FlyingSelected from '../assets/icons/Icon/Flying/Selected.svg';
import FlyingUnselected from '../assets/icons/Icon/Flying/Unselected.svg';
import FlyingWhite from '../assets/icons/Icon/Flying/White.svg';
import GhostSelected from '../assets/icons/Icon/Ghost/Selected.svg';
import GhostUnselected from '../assets/icons/Icon/Ghost/Unselected.svg';
import GhostWhite from '../assets/icons/Icon/Ghost/White.svg';
import GrassSelected from '../assets/icons/Icon/Grass/Selected.svg';
import GrassUnselected from '../assets/icons/Icon/Grass/Unselected.svg';
import GrassWhite from '../assets/icons/Icon/Grass/White.svg';
import GroundSelected from '../assets/icons/Icon/Ground/Selected.svg';
import GroundUnselected from '../assets/icons/Icon/Ground/Unselected.svg';
import GroundWhite from '../assets/icons/Icon/Ground/White.svg';
import IceSelected from '../assets/icons/Icon/Ice/Selected.svg';
import IceUnselected from '../assets/icons/Icon/Ice/Unselected.svg';
import IceWhite from '../assets/icons/Icon/Ice/White.svg';
import NormalSelected from '../assets/icons/Icon/Normal/Selected.svg';
import NormalUnselected from '../assets/icons/Icon/Normal/Unselected.svg';
import NormalWhite from '../assets/icons/Icon/Normal/White.svg';
import PoisonSelected from '../assets/icons/Icon/Poison/Selected.svg';
import PoisonUnselected from '../assets/icons/Icon/Poison/Unselected.svg';
import PoisonWhite from '../assets/icons/Icon/Poison/White.svg';
import PsychicSelected from '../assets/icons/Icon/Psychic/Selected.svg';
import PsychicUnselected from '../assets/icons/Icon/Psychic/Unselected.svg';
import PsychicWhite from '../assets/icons/Icon/Psychic/White.svg';
import RockSelected from '../assets/icons/Icon/Rock/Selected.svg';
import RockUnselected from '../assets/icons/Icon/Rock/Unselected.svg';
import RockWhite from '../assets/icons/Icon/Rock/White.svg';
import SteelSelected from '../assets/icons/Icon/Steel/Selected.svg';
import SteelUnselected from '../assets/icons/Icon/Steel/Unselected.svg';
import SteelWhite from '../assets/icons/Icon/Steel/White.svg';
import WaterSelected from '../assets/icons/Icon/Water/Selected.svg';
import WaterUnselected from '../assets/icons/Icon/Water/Unselected.svg';
import WaterWhite from '../assets/icons/Icon/Water/White.svg';

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
  dragon: {
    selected: <DragonSelected width="100%" height="100%" />,
    unselected: <DragonUnselected width="100%" height="100%" />,
    white: <DragonWhite width="100%" height="100%" />,
  },
  electric: {
    selected: <ElectricSelected width="100%" height="100%" />,
    unselected: <ElectricUnselected width="100%" height="100%" />,
    white: <ElectricWhite width="100%" height="100%" />,
  },
  fairy: {
    selected: <FairySelected width="100%" height="100%" />,
    unselected: <FairyUnselected width="100%" height="100%" />,
    white: <FairyWhite width="100%" height="100%" />,
  },
  fighting: {
    selected: <FightingSelected width="100%" height="100%" />,
    unselected: <FightingUnselected width="100%" height="100%" />,
    white: <FightingWhite width="100%" height="100%" />,
  },
  fire: {
    selected: <FireSelected width="100%" height="100%" />,
    unselected: <FireUnselected width="100%" height="100%" />,
    white: <FireWhite width="100%" height="100%" />,
  },
  flying: {
    selected: <FlyingSelected width="100%" height="100%" />,
    unselected: <FlyingUnselected width="100%" height="100%" />,
    white: <FlyingWhite width="100%" height="100%" />,
  },
  ghost: {
    selected: <GhostSelected width="100%" height="100%" />,
    unselected: <GhostUnselected width="100%" height="100%" />,
    white: <GhostWhite width="100%" height="100%" />,
  },
  grass: {
    selected: <GrassSelected color="white" width="100%" height="100%" />,
    unselected: <GrassUnselected width="100%" height="100%" />,
    white: <GrassWhite width="100%" height="100%" />,
  },
  ground: {
    selected: <GroundSelected color="white" width="100%" height="100%" />,
    unselected: <GroundUnselected width="100%" height="100%" />,
    white: <GroundWhite width="100%" height="100%" />,
  },
  ice: {
    selected: <IceSelected width="100%" height="100%" />,
    unselected: <IceUnselected width="100%" height="100%" />,
    white: <IceWhite width="100%" height="100%" />,
  },
  normal: {
    selected: <NormalSelected width="100%" height="100%" />,
    unselected: <NormalUnselected width="100%" height="100%" />,
    white: <NormalWhite width="100%" height="100%" />,
  },
  poison: {
    selected: <PoisonSelected width="100%" height="100%" />,
    unselected: <PoisonUnselected width="100%" height="100%" />,
    white: <PoisonWhite width="100%" height="100%" />,
  },
  psychic: {
    selected: <PsychicSelected width="100%" height="100%" />,
    unselected: <PsychicUnselected width="100%" height="100%" />,
    white: <PsychicWhite width="100%" height="100%" />,
  },
  rock: {
    selected: <RockSelected width="100%" height="100%" />,
    unselected: <RockUnselected width="100%" height="100%" />,
    white: <RockWhite width="100%" height="100%" />,
  },
  steel: {
    selected: <SteelSelected width="100%" height="100%" />,
    unselected: <SteelUnselected width="100%" height="100%" />,
    white: <SteelWhite width="100%" height="100%" />,
  },
  water: {
    selected: <WaterSelected width="100%" height="100%" />,
    unselected: <WaterUnselected width="100%" height="100%" />,
    white: <WaterWhite width="100%" height="100%" />,
  },
};

module.exports = { types };

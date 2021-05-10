import React from 'react';

import { BottomNavBar } from '../../components/navigation/BottomNavBar';
import { ControlsButtonGroup } from '../../components/navigation/ControlsButtonGroup';
import { TestRadioButton } from '../../components/elements/TestRadioButton';
import TestRadioInputSection from './../../components/userInput/TestRadioInputSection';

export default {
  title: 'Navigation/BottomNavBar',
  component: BottomNavBar
};

export const Default = () => <BottomNavBar label="This is Default NavBar"/>

// TODO
export const WithControls = () => <BottomNavBar 
    controls={<ControlsButtonGroup label='Перевірити'/>}
  />

export const WithUserInput = () => <BottomNavBar 
  userInput={<TestRadioInputSection testRadioButtonsList={[<TestRadioButton label='A'/>, <TestRadioButton label='Б'/>, <TestRadioButton label='В'/>, <TestRadioButton label='Г'/>]}/>}
  controls={<ControlsButtonGroup label='Перевірити'/>}
/>

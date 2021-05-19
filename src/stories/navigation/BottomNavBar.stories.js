import React from 'react';

import { BottomNavBar } from '../../components/navigation/BottomNavBar';
import { ControlsButtonGroup } from '../../components/navigation/ControlsButtonGroup';
import { TestRadioButton } from '../../components/elements/TestRadioButton';
import TestRadioInputSection from './../../components/userInput/TestRadioInputSection';
import NavigateButton from '../../components/elements/buttons/NavigateButton';
import Button from '../../components/elements/buttons/Button';

export default {
  title: 'Navigation/BottomNavBar',
  component: BottomNavBar
};

export const Default = () => <BottomNavBar>This is a BottomNavBar with children</BottomNavBar>

export const WithControls = () => <BottomNavBar
  controls={
    <ControlsButtonGroup
      collapsedButton={<Button onClick={() => {alert('Collapsed clicked')}} color='secondary' fullWidth>Завершити тест</Button>}
      expendedButtons={[
      <NavigateButton size='large' onClick={() => {alert('Going back!')}} before/>,
      <Button size='large' onClick={() => {alert('Clicked')}} fullWidth>Перевірити</Button>,
      <NavigateButton size='large' onClick={() => {alert('Going forward!')}}/>
      ]}
    />
  }
/>

export const WithUserInput = () => <BottomNavBar
  userInput={<TestRadioInputSection centerContent testRadioButtonsList={[<TestRadioButton label='A'/>, <TestRadioButton label='Б'/>, <TestRadioButton label='В'/>, <TestRadioButton label='Г'/>]}/>}
  controls={
    <ControlsButtonGroup
      collapsedButton={<Button onClick={() => {alert('Collapsed clicked')}} color='secondary' fullWidth>Завершити тест</Button>}
      expendedButtons={[
      <NavigateButton onClick={() => {alert('Going back!')}} before/>,
      <Button onClick={() => {alert('Clicked')}} fullWidth>Перевірити</Button>,
      <NavigateButton onClick={() => {alert('Going forward!')}}/>
      ]}
    />
  }
/>

export const WithChildren = () => <BottomNavBar
  userInput={<TestRadioInputSection centerContent testRadioButtonsList={[<TestRadioButton label='A'/>, <TestRadioButton label='Б'/>, <TestRadioButton label='В'/>, <TestRadioButton label='Г'/>]}/>}
  controls={
    <ControlsButtonGroup
      collapsedButton={<Button onClick={() => {alert('Collapsed clicked')}} color='secondary' fullWidth>Завершити тест</Button>}
      expendedButtons={[
      <NavigateButton onClick={() => {alert('Going back!')}} before/>,
      <Button onClick={() => {alert('Clicked')}} fullWidth>Перевірити</Button>,
      <NavigateButton onClick={() => {alert('Going forward!')}}/>
      ]}
    />
  }
>Children content</BottomNavBar>

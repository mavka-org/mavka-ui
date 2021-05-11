import React from 'react';

import Button from '../../components/elements/buttons/Button';
import NavigateButton from '../../components/elements/buttons/NavigateButton';
import ControlsButtonGroup from '../../components/navigation/ControlsButtonGroup';

export default {
  title: 'Navigation/ControlsButtonGroup',
  component: ControlsButtonGroup
};

export const Default = () => <ControlsButtonGroup
  collapsedButton={<Button onClick={() => {alert('Collapsed clicked')}} color='secondary' fullWidth>Завершити тест</Button>}
  expendedButtons={[
  <NavigateButton onClick={() => {alert('Going back!')}} before/>,
  <Button onClick={() => {alert('Clicked')}} fullWidth>Перевірити</Button>,
  <NavigateButton onClick={() => {alert('Going forward!')}}/>
  ]}
/>;

export const Collapsed = () => <ControlsButtonGroup
  collapsed
  collapsedButton={<Button onClick={() => {alert('Collapsed clicked')}} color='secondary' fullWidth>Завершити тест</Button>}
  expendedButtons={[
  <NavigateButton onClick={() => {alert('Going back!')}} before/>,
  <Button onClick={() => {alert('Clicked')}} fullWidth>Перевірити</Button>,
  <NavigateButton onClick={() => {alert('Going forward!')}}/>
  ]}
/>;

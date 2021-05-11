import React from 'react';

import { TestTopNavBar } from '../../components/navigation/TestTopNavBar';
import { Typography } from '@material-ui/core';

export default {
  title: 'Navigation/TestTopNavBar',
  component: TestTopNavBar
};

export const Default = () => <TestTopNavBar 
  exitOnClick={() => {alert('Exiting!')}} 
  collapsedTitle='Завдання 1'>
    <Typography variant='h3'>Завдання 1</Typography>
    These are children of the TestTopNavBar
  </TestTopNavBar>

export const NoCollapse = () => <TestTopNavBar exitOnClick={() => {alert('Exiting!')}} noCollapse>These are children of the TestTopNavBar. This TestTopNavBar doesn't collapse</TestTopNavBar>

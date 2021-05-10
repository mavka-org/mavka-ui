import React from 'react';

import { Grid } from '@material-ui/core';
import TestInputField from '../../components/elements/TestInputField';

export default {
  title: 'Elements/TestInputField',
  component: TestInputField,
};

export const Default = () => <TestInputField />;

export const UserInput = () => <TestInputField userInput={"This is user input"}/>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestInputField correctness="correct" userInput={"This is user input"} /></Grid>
    <Grid item><TestInputField correctness="incorrect" userInput={"This is user input"} /></Grid>
  </Grid>;

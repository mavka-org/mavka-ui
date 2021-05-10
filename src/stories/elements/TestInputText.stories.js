import React from 'react';

import { Grid } from '@material-ui/core';
import TestInputText from '../../components/elements/TestInputText';

export default {
  title: 'Elements/TestInputText',
  component: TestInputText,
};

export const Default = () => <TestInputText />;

export const UserInput = () => <TestInputText userInput={"This is user input"}/>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestInputText correctness="correct" userInput={"This is user input"} /></Grid>
    <Grid item><TestInputText correctness="incorrect" userInput={"This is user input"} /></Grid>
  </Grid>;

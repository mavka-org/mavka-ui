import React from 'react';

import { Grid } from '@material-ui/core';
import TestInputButton from '../../components/elements/TestInputButton';

export default {
  title: 'Elements/TestInputButton',
  component: TestInputButton,
};

export const Default = () => <TestInputButton />;

export const Labeled = () => <TestInputButton label={"A"}/>;

export const UserInput = () => <TestInputButton userInput={"This is user input"}/>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestInputButton correctness="correct" userInput={"This is user input"} /></Grid>
    <Grid item><TestInputButton selected correctness="incorrect" userInput={"This is user input"} /></Grid>
  </Grid>;

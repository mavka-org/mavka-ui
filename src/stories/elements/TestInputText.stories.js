import React from 'react';

import { Grid } from '@material-ui/core';
import TestInputText from '../../components/elements/TestInputText';

export default {
  title: 'Elements/TestInputText',
  component: TestInputText,
};

export const Default = () => <TestInputText />;

export const UserInput = () => <TestInputText userInput={"input"}/>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestInputText correctness="correct" userInput={"correct"} /></Grid>
    <Grid item><TestInputText correctness="incorrect" userInput={"incorrect"} /></Grid>
    <Grid item><TestInputText correctness="correct" /></Grid>
    <Grid item><TestInputText correctness="incorrect"/></Grid>
  </Grid>;

export const ReadOnly = () =>
  <Grid container spacing={1}>
    <Grid item><TestInputText correctness="correct" readOnly={true} userInput={"correct"} /></Grid>
    <Grid item><TestInputText correctness="incorrect" readOnly={true} userInput={"incorrect"} /></Grid>
  </Grid>;

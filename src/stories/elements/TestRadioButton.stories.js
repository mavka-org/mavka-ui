import React from 'react';

import { Grid } from '@material-ui/core';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'Elements/TestRadioButton',
  component: TestRadioButton,
};

export const Default = () => <TestRadioButton label="A"/>;

export const Selected = () =>
  <Grid container spacing={1}>
    <Grid item><TestRadioButton label="A" /></Grid>
    <Grid item><TestRadioButton selected label="A" /></Grid>
  </Grid>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestRadioButton selected correctness="correct" label="A" /></Grid>
    <Grid item><TestRadioButton selected correctness="incorrect" label="A" /></Grid>
    <Grid item><TestRadioButton selected correctness="part-correct" label="A" /></Grid>
    <Grid item><TestRadioButton correctness="correct" label="A" /></Grid>
    <Grid item><TestRadioButton correctness="incorrect" label="A" /></Grid>
    <Grid item><TestRadioButton correctness="part-correct" label="A" /></Grid>
  </Grid>;

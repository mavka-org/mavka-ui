import React from 'react';

import { Grid } from '@material-ui/core';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'Elements/TestRadioButton',
  component: TestRadioButton,
};

export const Default = () => <TestRadioButton />;

export const Selected = () =>
  <Grid container spacing={1}>
    <Grid item><TestRadioButton /></Grid>
    <Grid item><TestRadioButton selected /></Grid>
  </Grid>;

export const Correctness = () =>
  <Grid container spacing={1}>
    <Grid item><TestRadioButton selected correctness="correct" /></Grid>
    <Grid item><TestRadioButton selected correctness="incorrect" /></Grid>
    <Grid item><TestRadioButton selected correctness="part-correct" /></Grid>
    <Grid item><TestRadioButton correctness="correct" /></Grid>
  </Grid>;

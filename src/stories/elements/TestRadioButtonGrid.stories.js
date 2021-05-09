import React from 'react';

import { Grid } from '@material-ui/core';
import TestRadioButtonGrid from '../../components/elements/TestRadioButtonGrid';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'Elements/TestRadioButtonGrid',
  component: TestRadioButtonGrid,
};

let TwoDimenshionalList = [[<TestRadioButton />, <TestRadioButton />], [<TestRadioButton/>, <TestRadioButton />]]
let OneDimenshionalList = [<TestRadioButton/>, <TestRadioButton />]

export const Default = () => <TestRadioButtonGrid testRadioButtonsList={TwoDimenshionalList}/>;


export const OneDimenshionalDirection = () =>
  <Grid container dimension="column" spacing={2}>
    <Grid item><TestRadioButtonGrid testRadioButtonsList={OneDimenshionalList} /></Grid>
    <Grid item><TestRadioButtonGrid testRadioButtonsList={OneDimenshionalList} direction="column"/></Grid>
  </Grid>;
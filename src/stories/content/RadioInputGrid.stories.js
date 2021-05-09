import React from 'react';

import { Grid } from '@material-ui/core';
import RadioInputGrid from '../../components/elements/RadioInputGrid';

export default {
  title: 'Content/RadioInputGrid',
  component: RadioInputGrid,
};

let optionLabels = ["A", "Б", "В"]
let taskLabels = ["1", "2", "3"]

let TwoDimenshionalList = [[<TestRadioButton />, <TestRadioButton />], [<TestRadioButton/>, <TestRadioButton />]]
let OneDimenshionalList = [<TestRadioButton/>, <TestRadioButton />]


export const Default = () => <RadioInputGrid 
optionLabels={optionLabels} 
taskLabels={taskLabels} 
testRadioButtonsList={TwoDimenshionalList}/>;

export const OneDimensional = () => <RadioInputGrid 
optionLabels={optionLabels} 
taskLabels={taskLabels} 
testRadioButtonsList={OneDimenshionalList}/>;

export const NoLabels = () =>
  <Grid container dimension="column" spacing={2}>
    <Grid item><div>No option labels: </div></Grid>
    <Grid item><RadioInputGrid taskLabels={taskLabels} testRadioButtonsList={TwoDimenshionalList}/>;</Grid>
    <Grid item><div>No task labels: </div></Grid>
    <Grid item><RadioInputGrid optionLabels={optionLabels} testRadioButtonsList={TwoDimenshionalList}/>;</Grid>
    <Grid item><div>No labels: </div></Grid>
    <Grid item><RadioInputGrid testRadioButtonsList={TwoDimenshionalList}/>;</Grid>
  </Grid>;
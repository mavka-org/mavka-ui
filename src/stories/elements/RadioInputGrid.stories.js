import React from 'react';

import { Grid } from '@material-ui/core';
import RadioInputGrid from '../../components/elements/RadioInputGrid';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'Elements/RadioInputGrid',
  component: RadioInputGrid,
};

let TwoDimenshionalList = [[<TestRadioButton selected label={"A"} />, <TestRadioButton label={"A"} />], [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]]
let OneDimenshionalList = [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]
let taskLabels = ["1", "2", "3"]


export const Default = () => <RadioInputGrid testRadioButtonsList={TwoDimenshionalList}/>;

export const OneDimenshional = () =>
  <RadioInputGrid testRadioButtonsList={OneDimenshionalList} />;

export const TaskLabeled = () =>
  <RadioInputGrid testRadioButtonsList={TwoDimenshionalList} taskLabels={taskLabels} />;

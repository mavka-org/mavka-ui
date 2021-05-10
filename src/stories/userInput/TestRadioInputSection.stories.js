import React from 'react';

import { Grid } from '@material-ui/core';
import TestRadioInputSection from '../../components/userInput/TestRadioInputSection';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'userInput/TestRadioInputSection',
  component: TestRadioInputSection,
};

let TwoDimenshionalList = [[<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />], [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]]
let OneDimenshionalList = [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]
let taskLabels = ["1", "2", "3"]


export const Default = () => <TestRadioInputSection testRadioButtonsList={TwoDimenshionalList}/>;

export const OneDimenshional = () =>
  <TestRadioInputSection testRadioButtonsList={OneDimenshionalList} />;

export const TaskLabeled = () =>
  <TestRadioInputSection testRadioButtonsList={TwoDimenshionalList} taskLabels={taskLabels} />;

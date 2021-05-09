import React from 'react';

import { Grid } from '@material-ui/core';
import RadioButtonGrid from '../../components/elements/RadioButtonGrid';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'Elements/RadioButtonGrid',
  component: RadioButtonGrid,
};

let TwoDimenshionalList = [[<TestRadioButton />, <TestRadioButton />], [<TestRadioButton/>, <TestRadioButton />]]
let OneDimenshionalList = [<TestRadioButton/>, <TestRadioButton />]


export const Default = () => <RadioButtonGrid testRadioButtonsList={TwoDimenshionalList}/>;

export const OneDimenshional = () =>
  <RadioButtonGrid testRadioButtonsList={OneDimenshionalList} />;
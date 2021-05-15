import React from 'react';

import TestRadioInputSection from '../../components/userInput/TestRadioInputSection';
import TestRadioButton from '../../components/elements/TestRadioButton';

export default {
  title: 'userInput/TestRadioInputSection',
  component: TestRadioInputSection,
};

export const Default = () => <TestRadioInputSection testRadioButtonsList={
                                  [[<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />],
                                   [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]]}
                              />;

export const OneDimenshional = () =>
  <TestRadioInputSection testRadioButtonsList={[[<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />],
                                              [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]]}
  />;

export const TaskLabeled = () =>
  <TestRadioInputSection taskLabels={["1", "2", "3"]}
                         testRadioButtonsList={[[<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />],
                                                [<TestRadioButton label={"A"} />, <TestRadioButton label={"A"} />]]}  
  />;

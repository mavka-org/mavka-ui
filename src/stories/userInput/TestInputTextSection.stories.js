import React from 'react';

import { Grid } from '@material-ui/core';
import TestInputTextSection from '../../components/userInput/TestInputTextSection';
import TestInputText from './../../components/elements/TestInputText';

export default {
  title: 'userInput/TestInputTextSection',
  component: TestInputTextSection,
};

let TwoTestInputs = [{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"}, {"label":"2", "inputText": <TestInputText />, "correctAnswer": "40.67"}]
let OneTestInput = [{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"}]

export const Default = () => <TestInputTextSection 
                                testInputsList={[{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"},
                                                 {"label":"2", "inputText": <TestInputText />, "correctAnswer": "40.67"}]}
                              />;

export const OneInput = () =>
  <TestInputTextSection testInputsList={[{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"}]} />;

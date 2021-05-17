import React from 'react';

import TestInputTextSection from '../../components/userInput/TestInputTextSection';
import TestInputText from './../../components/elements/TestInputText';

export default {
  title: 'userInput/TestInputTextSection',
  component: TestInputTextSection,
};


export const Default = () => <TestInputTextSection testInputsList={[{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"},
                                                                    {"label":"2", "inputText": <TestInputText />, "correctAnswer": "40.67"}]}
                              />;

export const OneInput = () =>
  <TestInputTextSection testInputsList={[{"label":"1", "inputText": <TestInputText />, "correctAnswer": "12.67"}]} />;

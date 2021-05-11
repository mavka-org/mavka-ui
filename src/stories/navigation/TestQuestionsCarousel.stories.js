import React from 'react';
import TestQuestionsCarousel from '../../components/navigation/TestQuestionsCarousel';

import TestRadioButton from '../../components/elements/TestRadioButton';
import TestRadioInputSection from '../../components/userInput/TestRadioInputSection';

export default {
  title: 'Navigation/TestQuestionsCarousel',
  component: TestQuestionsCarousel
};

export const Default = () => <TestQuestionsCarousel>
  <TestRadioInputSection testRadioButtonsList={[
    <TestRadioButton label="1"/>, <TestRadioButton label="2"/>, <TestRadioButton label="3"/>, <TestRadioButton label="4"/>, <TestRadioButton label="5"/>, <TestRadioButton label="6"/>, <TestRadioButton label="7"/>,
    <TestRadioButton label="8"/>, <TestRadioButton label="9"/>, <TestRadioButton label="10"/>, <TestRadioButton label="11"/>, <TestRadioButton label="12"/>, <TestRadioButton label="13"/>, <TestRadioButton label="14"/>,
    <TestRadioButton label="15"/>, <TestRadioButton label="16"/>, <TestRadioButton label="17"/>, <TestRadioButton label="18"/>, <TestRadioButton label="19"/>, <TestRadioButton label="20"/>, <TestRadioButton label="21"/>,
    <TestRadioButton label="22"/>, <TestRadioButton label="23"/>, <TestRadioButton label="24"/>, <TestRadioButton label="25"/>, <TestRadioButton label="26"/>, <TestRadioButton label="27"/>, <TestRadioButton label="28"/>,
  ]} />
</TestQuestionsCarousel>;

import React, { useEffect, useState } from 'react';

import { TestTopNavBar } from '../../components/navigation/TestTopNavBar';
import TestRadioInputSection from '../../components/userInput/TestRadioInputSection';
import TestRadioButton from '../../components/elements/TestRadioButton';
import { Typography } from '@material-ui/core';

export default {
  title: 'Navigation/TestTopNavBar',
  component: TestTopNavBar
};

export const Default = () => { 
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (collapsed) {
      return;
    }
  
    const handleScroll = () => {
      setCollapsed(true);
    }
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed]);

  return(
    <TestTopNavBar 
      exitOnClick={() => {alert('Exiting!')}}
      collapsedTitle='Завдання 1'
      setCollapsed={setCollapsed} 
      collapsed={collapsed}
    >
      <Typography variant='h3'>Завдання 1</Typography>
      <Typography variant='body2' fontWeight='fontWeightMedium'>2019 основна секція</Typography>
      <TestRadioInputSection
        testRadioButtonsList={[
          <TestRadioButton label="1"/>, <TestRadioButton label="2"/>, <TestRadioButton label="3"/>, <TestRadioButton label="4"/>, <TestRadioButton label="5"/>, 
          <TestRadioButton label="6"/>, <TestRadioButton label="7"/>, <TestRadioButton label="8"/>, <TestRadioButton label="9"/>, <TestRadioButton label="10"/>, 
          <TestRadioButton label="11"/>, <TestRadioButton label="12"/>, <TestRadioButton label="13"/>, <TestRadioButton label="14"/>, <TestRadioButton label="15"/>,
          <TestRadioButton label="16"/>, <TestRadioButton label="17"/>, <TestRadioButton label="18"/>, <TestRadioButton label="19"/>, <TestRadioButton label="20"/>,
          <TestRadioButton label="21"/>, <TestRadioButton label="22"/>, <TestRadioButton label="23"/>, <TestRadioButton label="24"/>, <TestRadioButton label="25"/>,
          <TestRadioButton label="26"/>, <TestRadioButton label="27"/>, <TestRadioButton label="28"/>, <TestRadioButton label="29"/>, <TestRadioButton label="30"/>,
        ]}
      />
    </TestTopNavBar>
  )
}

import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
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
  const theme = useTheme();

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
      <Typography variant='h3' style={{ paddingTop: theme.spacing(1) }}>Завдання 1</Typography>
      <Typography variant='body2'>2019 основна секція</Typography>
      <TestRadioInputSection style={{ paddingTop: theme.spacing(2) }}
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

  export const StatusIcon = () => { 
    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme();
  
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
      <Grid container direction="column">
        <Grid item>
          <TestTopNavBar 
            collapsedTitle='Завдання 1'
            collapsed={true}
            currentQuestionCorrectness="correct"
          >
          </TestTopNavBar>
        </Grid>

        <Grid item>
          <TestTopNavBar 
            collapsedTitle='Завдання 1'
            collapsed={true}
            currentQuestionCorrectness="part-correct"
          >
          </TestTopNavBar>
        </Grid>

        <Grid item>
          <TestTopNavBar 
            collapsedTitle='Завдання 1'
            collapsed={true}
            currentQuestionCorrectness="incorrect"
          >
          </TestTopNavBar>
        </Grid>

        <Grid item>
          <TestTopNavBar 
            collapsedTitle='Завдання 1'
            collapsed={true}
            currentQuestionStarted
          >
          </TestTopNavBar>
        </Grid>

        
      </Grid>
    
    )
}


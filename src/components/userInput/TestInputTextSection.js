import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TestInputText from '../elements/TestInputText';
import { Typography } from '@material-ui/core';

const useStyles = props => makeStyles(theme => ({
}));

export function TestInputTextSection({ children, ...props }) {
  const classes = useStyles(props)();
  const theme = useTheme();
  console.log(props)
  return (
    <>
      {props.testInputsList.map(elem =>
        <Grid container direction="column" spacing={1}>
          <Grid item container direction="row" alignItems="center" spacing={1}>
            <Grid item>{elem.label}</Grid>
            <Grid item>{elem.inputText}</Grid>
          </Grid>
          <Grid item><Typography>Відповідь: {elem.correctAnswer} </Typography> </Grid>
        </Grid>
      )}
    </>
  );

}

export default TestInputTextSection;

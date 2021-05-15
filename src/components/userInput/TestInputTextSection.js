import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TestInputText from '../elements/TestInputText';
import { Typography } from '@material-ui/core';
import { getColorByCorrectness } from '../../helpers';
import get from 'get-value';

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
            <Grid item><Typography><b>{elem.label}</b></Typography>  </Grid>
            <Grid item>{elem.inputText}</Grid>
          </Grid>
          <Grid item><Typography variant="body1">Відповідь: <b><span style={{ color:'#34C759' }}> {elem.correctAnswer}</span></b> </Typography> </Grid>
        </Grid>
      )}
    </>
  );

}

export default TestInputTextSection;

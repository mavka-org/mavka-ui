import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = props => makeStyles(theme => ({

}));

export function TestInputTextSection({ children, ...props }) {
  const classes = useStyles(props)();
  const theme = useTheme();

  return (
    <>
      {props.testInputsList.map(elem =>
        <Grid container direction="column" spacing={1}>
          <Grid item container direction="row" alignItems="center" spacing={1}>
            <Grid item><Typography><b><strong>{elem.label}:</strong></b></Typography></Grid>
            <Grid item>{elem.inputText}</Grid>
          </Grid>
          <Grid item><Typography variant="body1">Відповідь: <b><span style={{ color:'#34C759' }}> {elem.correctAnswer}</span></b> </Typography> </Grid>
        </Grid>
      )}
    </>
  );

}

export default TestInputTextSection;

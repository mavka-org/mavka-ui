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
    <Grid container direction="row" spacing={2}>
      {props.testInputsList.map((elem) => {
        return (
          
            props.submitted 
            ? <Grid item container direction="column" spacing={1} style={{width: "min-content"}}>
                <Grid item container direction="row" alignItems="center" spacing={1} style={{flexWrap: "nowrap"}}>
                  <Grid item><Typography><b><strong>{elem.label}:</strong></b></Typography></Grid>
                  <Grid item>{elem.inputText}</Grid>
                </Grid>
                <Grid item><Typography variant="body1">Відповідь: <b><span style={{ color:'#34C759' }}> {elem.correctAnswer}</span></b> </Typography> </Grid>
              </Grid>

            : <Grid item>{elem.inputText}</Grid>

        )
      }
        
      )}
    </Grid>
  );

}

export default TestInputTextSection;

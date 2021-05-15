import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardContent } from '@material-ui/core';
const useStyles = props => makeStyles(theme => ({
  root: {
    position:'absolute',
    top:'0',
    left:'0',
    display:'flex',
    width:'100%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0, 0, 0, 0.5)',

  },
  dialog:{
    backgroundColor:'rgb(255, 255, 255)',
    color:'black',
    borderRadius:'20px',
    padding:'15px',
    width:'80%'
  }
}));

export function Dialog({ children, ...props }) {
  const classes = useStyles(props)();
  return (
    <div className={classes.root}>
      <div className={classes.dialog} style={{margin:'0 auto', width:'80%'}} >
          <CardContent>
            <Grid container alignItems="center" direction="column" spacing={2}>
              <Grid item>
                <Typography>{children}</Typography>
              </Grid>
            </Grid>
          </CardContent>
      </div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.isRequired,
};

export default Dialog;

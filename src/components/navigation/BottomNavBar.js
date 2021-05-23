import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Surface from '../layout/Surface';
import PageContainer from '../layout/PageContainer';

const useStyles = props => makeStyles( theme => ({
  root: {
    position: 'fixed',
    zIndex:'999',
    left:'0',
    bottom:'0',
    width:'100%',
  }
}));

export function BottomNavBar({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Surface className={classes.root}>
      <PageContainer>
        <Grid container direction='column' spacing={1}>
          { children ? <Grid item>{children}</Grid> : null }
          { props.userInput ? <Grid item>{props.userInput}</Grid> : null }
          { props.controls ? <Grid item>{props.controls}</Grid> : null }
        </Grid>
      </PageContainer>
    </Surface>
  );
}

BottomNavBar.propTypes = {
  /**
   * ControlsButtonGroup
   */
  controls: PropTypes.object,
  /**
   * User input field
   */
  userInput: PropTypes.node,
  /**
   * Content that goes inside of the BottomNavBar
   */
  children: PropTypes.node,
};

export default BottomNavBar;

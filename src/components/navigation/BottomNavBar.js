import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Surface from '../layout/Surface';
import PageContainer from '../layout/PageContainer';

const useStyles = props => makeStyles( theme => ({
  root: {
  }
}));

export function BottomNavBar({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Surface>
      <PageContainer>
        <Grid container direction='column' spacing={1}>
          <Grid item>{children}</Grid>
          {/* <Grid item>{props.userInput}</Grid> */}
          <Grid item>{props.controls}</Grid>
        </Grid>
      </PageContainer>
    </Surface>
  );
}

BottomNavBar.propTypes = {
  /**
   * ControlsButtonGroup
   */
  controls: PropTypes.array,
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

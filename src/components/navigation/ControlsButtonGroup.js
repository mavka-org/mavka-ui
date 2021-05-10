import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = props => makeStyles( theme => ({
  growItem: {
    flexGrow: 1
  }
}));

export default function ControlsButtonGroup({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Grid container spacing={1}>
      {
        props.collapsed ? props.collapsedButton :
        <>
          <Grid item>
            {props.expendedButtons[0]}
          </Grid>
          <Grid item className={classes.growItem}>
            {props.expendedButtons[1]}
          </Grid>
          <Grid item>
            {props.expendedButtons[2]}
          </Grid>
        </>
      }
    </Grid>
  );
}

ControlsButtonGroup.propTypes = {
  /**
   * An array of THREE (!) controls buttons
   */
  expendedButtons: PropTypes.array,
  /**
   * A single button. Displayed when collapsed = true.
   */
  collapsedButton: PropTypes.node,
  /**
   * If true, the expandedButtons are replaced with collapsedButton.
   */
  collapsed: PropTypes.bool,
};

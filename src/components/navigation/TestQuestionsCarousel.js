import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = props => makeStyles( theme => ({
  growItem: {
    flexGrow: 1
  }
}));

export function TestQuestionsCarousel({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <>ToDo</>
  );
}

TestQuestionsCarousel.propTypes = {
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

export default TestQuestionsCarousel;

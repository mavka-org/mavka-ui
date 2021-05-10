import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from './Button';

const useStyles = props => makeStyles( theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    minWidth: 0
  },
  direction: {
    transform: props.before ? 'scaleX(-1)': null
  }
}));

export default function NavigateButton({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Button {...props} className={classes.root}>
      <PlayArrowIcon className={classes.direction}/>
    </Button>
  );
}

NavigateButton.propTypes = {
  /**
   * If true, the button is facing in before direction
   */
  before: PropTypes.bool,
  /**
   * Optional click handler
   */
   onClick: PropTypes.func,
};

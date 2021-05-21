import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import get from 'get-value'
import Typography from '@material-ui/core/Typography';

const useStyles = props => makeStyles(theme => ({
  root: {
    width:"100%",
    padding: theme.spacing(2),
    backgroundColor: get(theme.palette, props.color),
    borderRadius: theme.shape.borderRadius
  },
 
}));

export function ContentInfoBlock({ children, ...props }) {
  const classes = useStyles(props)();
  return (
    <Grid container className={classes.root}>
      {children}
    </Grid>
  );
}

ContentInfoBlock.propTypes = {
  children: PropTypes.node,
};

export default ContentInfoBlock;

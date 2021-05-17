import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import get from 'get-value';

const useStyles = props => makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
    backgroundColor: get(theme.palette, props.color),
  },
}));

export function ContentBlock({ children, ...props }) {
  const classes = useStyles(props)();
  return (
    <Grid className={classes.root} direction='column' container>
      <Grid item container><Typography variant="body1"><strong>{props.title}</strong></Typography></Grid>
      <Grid item container><Typography variant="body1">{children}</Typography></Grid>
    </Grid>
  );
}

ContentBlock.propTypes = {
  /**
   * The title for the content block
   */
  title: PropTypes.string,
  /**
   * The component children content
   */
  children: PropTypes.node.isRequired
};

export default ContentBlock;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import get from 'get-value';

const useStyles = props => makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(1)
  }
}));

export function ContentBlock({ children, ...props }) {
  const classes = useStyles(props)();
  return (
    <Grid className={classes.root} direction='column' container>
      {props.title ? <Grid item container className={classes.title}><Typography><strong>{props.title}</strong></Typography></Grid> : null}
      <Grid item container>{children}</Grid>
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

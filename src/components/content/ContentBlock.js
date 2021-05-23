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
  }
}));

export function ContentBlock({ children, ...props }) {
  const classes = useStyles(props)();
  const classNames = `${classes.root} ${props.className}`;
  return (
    <Grid {...props} className={classNames} direction='column' container spacing={1}>
      {props.title ? <Grid item container><Typography><strong>{props.title}</strong></Typography></Grid> : null}
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
   * The component optional styles
   */
  className: PropTypes.string,
  /**
   * The component children content
   */
  children: PropTypes.node.isRequired
};

export default ContentBlock;

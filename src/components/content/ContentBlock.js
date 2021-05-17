import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = props => makeStyles( theme => ({
  root: {
  },
}));

export function ContentBlock({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Grid direction='column' container spacing={1}>
      <Grid item><Typography>{props.title}</Typography></Grid>
      <Grid item><Typography>{children}</Typography></Grid>
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
   children: PropTypes.node.isRequired,

};

export default ContentBlock;

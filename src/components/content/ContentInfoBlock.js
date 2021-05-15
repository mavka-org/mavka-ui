import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardContent } from '@material-ui/core';
const useStyles = props => makeStyles(theme => ({
  root: {
    width:"100%",
    padding:'15px',
    backgroundColor: theme.palette.alternative.yellowLight
  },
 
}));

export function ContentInfoBlock({ children, ...props }) {
  const classes = useStyles(props)();
  return (
    <Grid container className={classes.root}>
      <Typography variant="body1">💡 {children}</Typography>
    </Grid>
  );
}

ContentInfoBlock.propTypes = {
  children: PropTypes.isRequired,
};

export default ContentInfoBlock;

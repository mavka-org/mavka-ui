import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = props => makeStyles( theme => ({
  root: {
   
  },
}));

export function ContentListItem({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Grid container direction='row' alignItems="center" className={classes.root}>
      <Grid item style={{marginRight:'15px'}}><Typography>{props.label}:</Typography></Grid>
      <Grid item><Typography>{children}</Typography></Grid>
    </Grid>
  );
}

ContentListItem.propTypes = {
   label: PropTypes.string,

   children: PropTypes.isRequired,

};

export default ContentListItem;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '../elements/Button';
import get from 'get-value'
const useStyles = props => makeStyles( theme => ({
  root: {
    backgroundColor: get(theme.palette, props.color) ,
    borderRadius: '8px',
    padding:'15px 30px'
  },
}));

export default function ModeCard({ children, ...props }){
  const classes = useStyles(props)();
  return (
    <Grid container direction='row' alignItems="flex-start"  spacing={1} className={classes.root}>
      <Grid item style={{marginRight:'20px'}}>
      <p style={{fontSize:'48px', margin:'0'}}>{props.iconText}</p>
      </Grid>
      <Grid item >
        <Grid item><Typography>{props.title}</Typography></Grid>
        <Grid item style={{margin:'10px 0'}}><Typography>{props.subtitle}</Typography></Grid>
        <Grid item><ButtonBase size="medium" color="primary" variant="contained"><Typography>{props.buttonText}</Typography></ButtonBase></Grid>
      </Grid>
    </Grid>
  );
}

ModeCard.propTypes = {
  /**
   * The title for the content block
   */
  title: PropTypes.string,

  subtitle: PropTypes.string,

  buttonText: PropTypes.string,

  iconText: PropTypes.string,

  color: PropTypes.isRequired,

  /**
   * The component children content
   */
   children: PropTypes.node.isRequired,

};

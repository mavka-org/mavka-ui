import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import { Typography } from './Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '200px',
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  label: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  }
}));

const Colors = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <>
      <Typography variant='h4' className={classes.label}>Main Colors</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>
          Primary: {theme.palette.primary.main}<br/>
          theme.palette.primary.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.secondary.main, color: theme.palette.secondary.contrastText}}>
          Secondary: {theme.palette.secondary.main}
          theme.palette.secondary.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.success.main, color: theme.palette.success.contrastText}}>
          Success: {theme.palette.success.main}
          theme.palette.success.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.successLight.main, color: theme.palette.successLight.contrastText}}>
          Success Light: {theme.palette.successLight.main}
          theme.palette.successLight.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.error.main, color: theme.palette.error.contrastText}}>
          Error: {theme.palette.error.main}
          theme.palette.error.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.errorLight.main, color: theme.palette.errorLight.contrastText}}>
          Error Light: {theme.palette.errorLight.main}
          theme.palette.errorLight.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.warning.main, color: theme.palette.warning.contrastText}}>
          Warning: {theme.palette.warning.main}
          theme.palette.warning.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.info.main, color: theme.palette.info.contrastText}}>
          Info: {theme.palette.info.main}
          theme.palette.info.main
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Layout</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.background.main, color: theme.palette.background.contrastText}}>
          Background: {theme.palette.background.main}
          theme.palette.background.main
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.surface.contrastText}}>
          Surface: {theme.palette.surface.main}
          theme.palette.surface.main
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Text</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.text.primary}}>
          Primary: {theme.palette.text.primary}
          theme.palette.text.primary
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.text.secondary}}>
          Secondary: {theme.palette.text.secondary}
          theme.palette.text.secondary
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.text.disabled}}>
          Disabled: {theme.palette.text.disabled}
          theme.palette.text.disabled
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.text.hint}}>
          Hint: {theme.palette.text.hint}
          theme.palette.text.hint
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Common</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.common.black, color: theme.palette.common.white}}>
          Black: {theme.palette.common.black}
          theme.palette.common.black
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.common.white, color: theme.palette.common.black}}>
          White: {theme.palette.common.white}
          theme.palette.common.white
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Alternative</Typography>
      <Typography variant='body1' className={classes.label}>These don't have contrastText and they will be a problem while theming. Don't use them unless absolutely necessary!</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.blue, color: theme.palette.common.white}}>
          Blue: {theme.palette.alternative.blue}
          theme.palette.alternative.blue
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.blueLight, color: theme.palette.common.black}}>
          Blue Light: {theme.palette.alternative.blueLight}
          theme.palette.alternative.blueLight
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.green, color: theme.palette.common.white}}>
          Green: {theme.palette.alternative.green}
          theme.palette.alternative.green
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.greenLight, color: theme.palette.common.black}}>
          Green Light: {theme.palette.alternative.greenLight}
          theme.palette.alternative.greenLight
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.purple, color: theme.palette.common.white}}>
          Purple: {theme.palette.alternative.purple}
          theme.palette.alternative.purple
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.purpleLight, color: theme.palette.common.black}}>
          Purple Light: {theme.palette.alternative.purpleLight}
          theme.palette.alternative.purpleLight
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.red, color: theme.palette.common.white}}>
          Red: {theme.palette.alternative.red}
          theme.palette.alternative.red
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.redLight, color: theme.palette.common.black}}>
          Red Light: {theme.palette.alternative.redLight}
          theme.palette.alternative.redLight
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.yellow, color: theme.palette.common.white}}>
          Yellow: {theme.palette.alternative.yellow}
          theme.palette.alternative.yellow
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.yellowLight, color: theme.palette.common.black}}>
          Yellow Light: {theme.palette.alternative.yellowLight}
          theme.palette.alternative.yellowLight
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.grey, color: theme.palette.common.white}}>
          Grey: {theme.palette.alternative.grey}
          theme.palette.alternative.grey
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.alternative.greyLight, color: theme.palette.common.black}}>
          Grey Light: {theme.palette.alternative.greyLight}
          theme.palette.alternative.greyLight
        </Paper>
      </Grid>
    </>
  )
}

export default Colors

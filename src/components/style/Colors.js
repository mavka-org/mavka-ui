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

const getColorStyle = (clr, theme) => {
  return {background: clr, color: theme.palette.getContrastText(clr)}
}

const Colors = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <>
      <Typography variant='h4' className={classes.label}>Main Colors</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.primary.main, theme)}>
          Primary: {theme.palette.primary.main}<br/>
          theme.palette.primary.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.secondary.main, theme)}>
          Secondary: {theme.palette.secondary.main}<br/>
          theme.palette.secondary.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.success.main, theme)}>
          Success: {theme.palette.success.main}<br/>
          theme.palette.success.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.successLight.main, theme)}>
          Success Light: {theme.palette.successLight.main}<br/>
          theme.palette.successLight.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.error.main, theme)}>
          Error: {theme.palette.error.main}<br/>
          theme.palette.error.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.errorLight.main, theme)}>
          Error Light: {theme.palette.errorLight.main}<br/>
          theme.palette.errorLight.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.warning.main, theme)}>
          Warning: {theme.palette.warning.main}<br/>
          theme.palette.warning.main
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.info.main, theme)}>
          Info: {theme.palette.info.main}<br/>
          theme.palette.info.main
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Layout</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.background.default, theme)}>
          Background: {theme.palette.background.default}<br/>
          theme.palette.background.default
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.background.paper, theme)}>
          Background Paper: {theme.palette.background.paper}<br/>
          theme.palette.background.paper
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Text</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={{background: theme.palette.common.white, color: theme.palette.text.primary}}>
          Primary: {theme.palette.text.primary}<br/>
          theme.palette.text.primary
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.common.white, color: theme.palette.text.secondary}}>
          Secondary: {theme.palette.text.secondary}<br/>
          theme.palette.text.secondary
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.common.white, color: theme.palette.text.disabled}}>
          Disabled: {theme.palette.text.disabled}<br/>
          theme.palette.text.disabled
        </Paper>
        <Paper className={classes.paper} style={{background: theme.palette.common.white, color: theme.palette.text.hint}}>
          Hint: {theme.palette.text.hint}<br/>
          theme.palette.text.hint
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Common</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.common.black, theme)}>
          Black: {theme.palette.common.black}<br/>
          theme.palette.common.black
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.common.white, theme)}>
          White: {theme.palette.common.white}<br/>
          theme.palette.common.white
        </Paper>
      </Grid>

      <Typography variant='h4' className={classes.label}>Alternative</Typography>
      <Typography variant='body1' className={classes.label}>These don't have contrastText and they will be a problem while theming. Don't use them unless absolutely necessary!</Typography>
      <Grid className={classes.root} container spacing={3}>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.blue, theme)}>
          Blue: {theme.palette.alternative.blue}<br/>
          theme.palette.alternative.blue
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.blueLight, theme)}>
          Blue Light: {theme.palette.alternative.blueLight}<br/>
          theme.palette.alternative.blueLight
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.green, theme)}>
          Green: {theme.palette.alternative.green}<br/>
          theme.palette.alternative.green
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.greenLight, theme)}>
          Green Light: {theme.palette.alternative.greenLight}<br/>
          theme.palette.alternative.greenLight
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.purple, theme)}>
          Purple: {theme.palette.alternative.purple}<br/>
          theme.palette.alternative.purple
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.purpleLight, theme)}>
          Purple Light: {theme.palette.alternative.purpleLight}<br/>
          theme.palette.alternative.purpleLight
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.red, theme)}>
          Red: {theme.palette.alternative.red}<br/>
          theme.palette.alternative.red
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.redLight, theme)}>
          Red Light: {theme.palette.alternative.redLight}<br/>
          theme.palette.alternative.redLight
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.yellow, theme)}>
          Yellow: {theme.palette.alternative.yellow}<br/>
          theme.palette.alternative.yellow
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.yellowLight, theme)}>
          Yellow Light: {theme.palette.alternative.yellowLight}<br/>
          theme.palette.alternative.yellowLight
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.grey, theme)}>
          Grey: {theme.palette.alternative.grey}<br/>
          theme.palette.alternative.grey
        </Paper>
        <Paper className={classes.paper} style={getColorStyle(theme.palette.alternative.greyLight, theme)}>
          Grey Light: {theme.palette.alternative.greyLight}<br/>
          theme.palette.alternative.greyLight
        </Paper>
      </Grid>
    </>
  )
}

export default Colors

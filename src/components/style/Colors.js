import React from 'react';

import { Grid, Paper } from '@material-ui/core';
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
}));

const Colors = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <Grid className={classes.root} container spacing={3}>
      <Paper className={classes.paper} style={{background: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>
        Primary: {theme.palette.primary.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.success.main, color: theme.palette.success.contrastText}}>
        Success: {theme.palette.success.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.successLight.main, color: theme.palette.successLight.contrastText}}>
        Success Light: {theme.palette.successLight.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.error.main, color: theme.palette.error.contrastText}}>
        Error: {theme.palette.error.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.errorLight.main, color: theme.palette.errorLight.contrastText}}>
        Error Light: {theme.palette.errorLight.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.warning.main, color: theme.palette.warning.contrastText}}>
        Warning: {theme.palette.warning.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.info.main, color: theme.palette.info.contrastText}}>
        Info: {theme.palette.info.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.content.main, color: theme.palette.content.contrastText}}>
        Content: {theme.palette.content.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.contentGrey.main, color: theme.palette.contentGrey.contrastText}}>
        Content Grey: {theme.palette.contentGrey.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.background.main, color: theme.palette.background.contrastText}}>
        Background: {theme.palette.background.main}
      </Paper>
      <Paper className={classes.paper} style={{background: theme.palette.surface.main, color: theme.palette.surface.contrastText}}>
        Surface: {theme.palette.surface.main}
      </Paper>
    </Grid>
  )
}

export default Colors

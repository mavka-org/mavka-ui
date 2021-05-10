import React from 'react';

import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '../../../components/elements/buttons/IconButton';

export default {
  title: 'Elements/Buttons/IconButton',
  component: IconButton
};

export const Default = () => <IconButton><HomeIcon/></IconButton>;

export const Color = () =>
  <Grid container spacing={2}>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='inherit'><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='primary'><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='secondary'><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='disabled'><HomeIcon/></IconButton></Grid>
  </Grid>;

export const Size = () =>
  <Grid container alignItems='center' spacing={2}>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton size='small'><HomeIcon/></IconButton></Grid>
  </Grid>;

export const Disabled = () =>
  <Grid container spacing={2}>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton disabled><HomeIcon/></IconButton></Grid>
  </Grid>;

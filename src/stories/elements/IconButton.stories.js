import React from 'react';

import { Grid } from '@material-ui/core';
import { HomeIcon } from '@material-ui/icons';
import IconButton from '../../components/elements/IconButton';

export default {
  title: 'Elements/IconButton',
  component: IconButton
};

export const Default = () => <IconButton><HomeIcon/></IconButton>;

export const Color = () =>
  <Grid container spacing={2}>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='secondary'><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton color='disabled'><HomeIcon/></IconButton></Grid>
  </Grid>;

export const Variants = () =>
  <Grid container spacing={2}>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton variant='outlined'><HomeIcon/></IconButton></Grid>
  </Grid>;

export const Size = () =>
  <Grid container spacing={2}>
    <Grid item><IconButton size='large'><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton><HomeIcon/></IconButton></Grid>
    <Grid item><IconButton size='small'><HomeIcon/></IconButton></Grid>
  </Grid>;

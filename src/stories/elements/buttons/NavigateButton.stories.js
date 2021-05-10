import React from 'react';

import { Grid } from '@material-ui/core';
import NavigateButton from '../../../components/elements/buttons/NavigateButton';

export default {
  title: 'Elements/Buttons/NavigateButton',
  component: NavigateButton
};

export const Default = () => <NavigateButton/>;

export const Before = () =>
  <Grid container spacing={2}>
    <Grid item><NavigateButton/></Grid>
    <Grid item><NavigateButton before /></Grid>
  </Grid>;

export const Size = () =>
<Grid container spacing={2}>
  <Grid item><NavigateButton size='large'/></Grid>
  <Grid item><NavigateButton /></Grid>
  <Grid item><NavigateButton size='small'/></Grid>
</Grid>;

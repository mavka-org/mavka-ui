import React from 'react';

import { Grid } from '@material-ui/core';
import Button from '../../components/elements/Button';

export default {
  title: 'Elements/Button',
  component: Button
};

export const Default = () => <Button>Button</Button>;

export const Color = () =>
  <Grid container spacing={2}>
    <Grid item><Button>Primary</Button></Grid>
    <Grid item><Button color='secondary'>Secondary</Button></Grid>
  </Grid>;

export const Variants = () =>
  <Grid container spacing={2}>
    <Grid item><Button>Contained</Button></Grid>
    <Grid item><Button variant='outlined'>Outlined</Button></Grid>
    <Grid item><Button variant='text'>Text</Button></Grid>
  </Grid>;

export const Size = () =>
  <Grid container spacing={2}>
    <Grid item><Button size='large'>Large</Button></Grid>
    <Grid item><Button>Medium</Button></Grid>
    <Grid item><Button size='small'>Small</Button></Grid>
  </Grid>;

export const Info = () =>
  <Grid container spacing={2}>
    <Grid item><Button info>Informative Button</Button></Grid>
    <Grid item><Button info variant='outlined' infoBackground='successLight.main'>With Background</Button></Grid>
  </Grid>;

export const Disabled = () =>
  <Grid container spacing={2}>
    <Grid item><Button disabled>Contained</Button></Grid>
    <Grid item><Button disabled variant='outlined'>Outlined</Button></Grid>
    <Grid item><Button disabled variant='text'>Text</Button></Grid>
  </Grid>;

import React from 'react';

import { Grid } from '@material-ui/core';
import Button from '../../components/elements/Button';
import {TestButton} from '../../components/elements/Button';

export default {
  title: 'Elements/Button',
  component: Button
};

export const Default = () => <Button>Button</Button>;

export const Test = () => <TestButton>Button</TestButton>;

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

import { Typography } from '@material-ui/core';
import React from 'react';

import ModeCard from '../../components/content/ModeCard';
import { ButtonBase } from '../../components/elements/buttons/Button';

export default {
  title: 'Content/ModeCard',
  component: ModeCard
};

export const Default = () => <ModeCard title='Title' subtitle='This is a subtitle' buttonProp={<ButtonBase size="medium" color="primary" variant="contained"><Typography>Button</Typography></ButtonBase>} iconText='🔥' color='alternative.purpleLight'/>;

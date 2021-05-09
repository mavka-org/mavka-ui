import React from 'react';

import ModeCard from '../../components/content/ModeCard';

export default {
  title: 'Content/ModeCard',
  component: ModeCard
};

export const Default = () => <ModeCard title='Title' subtitle='This is a subtitle' buttonText='Button text' iconText='🔥' color='alternative.purpleLight'/>;

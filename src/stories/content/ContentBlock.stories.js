import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import ContentBlock from '../../components/content/ContentBlock';

export default {
  title: 'Content/ContentBlock',
  component: ContentBlock
};

export const Default = () => <ContentBlock color="alternative.redLight">This is content info block's children</ContentBlock>;


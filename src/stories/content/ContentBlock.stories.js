import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import ContentBlock from '../../components/content/ContentBlock';

export default {
  title: 'Content/ContentBlock',
  component: ContentBlock
};

export const Default = () => <ContentBlock color="alternative.redLight" emoji="💡" title="This is Content Block's title"> <Typography variant="body1" >This is content info block's children</Typography></ContentBlock>;

export const NoTitle = () => <ContentBlock>This is content block's children. The content block doesn't have a title</ContentBlock>;
export const Color = () => <Grid container direction="column" spacing={2}>
  <Grid item><ContentBlock color="alternative.redLight" title="Primary title"><Typography variant="body1">Primary</Typography></ContentBlock></Grid>
  <Grid item><ContentBlock color="alternative.blueLight" title="Secondary title"><Typography variant="body1">Secondary</Typography></ContentBlock></Grid>
</Grid>;

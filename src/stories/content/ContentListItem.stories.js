import React from 'react';

import { Grid } from '@material-ui/core';
import ContentListItem from '../../components/content/ContentListItem';

export default {
  title: 'Content/ContentListItem',
  component: ContentListItem
};

export const Default = () => <ContentListItem label='A'> (x-4) </ContentListItem>;

export const ContentList = () => 
<Grid container direction="column" spacing={1}>
  <Grid item><ContentListItem label='A'>(x-4)</ContentListItem></Grid>
  <Grid item><ContentListItem label='Б'>(x-4)</ContentListItem></Grid>
  <Grid item><ContentListItem label='В'>(x-4)</ContentListItem></Grid>
  <Grid item><ContentListItem label='Г'>(x-4)</ContentListItem></Grid>
</Grid>;

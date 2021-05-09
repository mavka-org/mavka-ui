import React from 'react';

import { Grid } from '@material-ui/core';
import ContentListItem from '../../components/content/ContentListItem';

export default {
  title: 'Content/ContentListItem',
  component: ContentListItem
};

export const Default = () => <ContentListItem label='A'>This is content list item's children</ContentListItem>;

export const ContentList = () => 
<Grid container direction="column" spacing={1}>
  <Grid item><ContentListItem label='A'>This is content list item's children</ContentListItem></Grid>
  <Grid item><ContentListItem label='Б'>This is content list item's children</ContentListItem></Grid>
  <Grid item><ContentListItem label='В'>This is content list item's children</ContentListItem></Grid>
  <Grid item><ContentListItem label='Г'>This is content list item's children</ContentListItem></Grid>
</Grid>;

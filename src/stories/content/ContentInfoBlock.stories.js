import React from 'react';

import { Grid } from '@material-ui/core';
import ContentInfoBlock from '../../components/elements/ContentInfoBlock';

export default {
    title: 'Content/ContentInfoBlock',
    component: ContentInfoBlock
};

export const Default = () => <ContentInfoBlock>This is content info block's children</ContentInfoBlock>;

export const Color = () =>
    <Grid container direction="column" spacing={2}>
        <Grid item><ContentInfoBlock>Primary</ContentInfoBlock></Grid>
        <Grid item><ContentInfoBlock color='secondary'>Secondary</ContentInfoBlock></Grid>
    </Grid>;

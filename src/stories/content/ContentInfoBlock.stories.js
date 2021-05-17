import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import ContentInfoBlock from '../../components/content/ContentInfoBlock';

export default {
    title: 'Content/ContentInfoBlock',
    component: ContentInfoBlock
};

export const Default = () => <ContentInfoBlock color="alternative.yellowLight"></ContentInfoBlock>;

export const Color = () =>
    <Grid container direction="column" spacing={2}>
        <Grid item><ContentInfoBlock color="alternative.redLight"><Typography variant="body1">Primary</Typography></ContentInfoBlock></Grid>
        <Grid item><ContentInfoBlock color="alternative.blueLight" emoji="💡 "><Typography variant="body1">Secondary</Typography></ContentInfoBlock></Grid>
    </Grid>;

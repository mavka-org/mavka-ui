import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import ContentInfoBlock from '../../components/content/ContentInfoBlock';

export default {
    title: 'Content/ContentInfoBlock',
    component: ContentInfoBlock
};

export const Default = () => <ContentInfoBlock color="alternative.yellowLight">Thi is block's children!</ContentInfoBlock>;

export const Color = () =>
    <Grid container direction="column" spacing={2}>
        <Grid item><ContentInfoBlock color="alternative.redLight">Primary</ContentInfoBlock></Grid>
        <Grid item><ContentInfoBlock color="alternative.blueLight">Secondary</ContentInfoBlock></Grid>
    </Grid>;

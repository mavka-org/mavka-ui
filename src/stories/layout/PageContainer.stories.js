import React from 'react';

import PageContainer from '../../components/layout/PageContainer';
import Surface from '../../components/layout/Surface';
import { makeStyles } from '@material-ui/core/styles';

export default {
  title: 'Layout/PageContainer',
  component: PageContainer
};

const useStyles = makeStyles( theme => ({
  root: {
    background: '#000',
    color: '#fff'
  }
}));

export const Default = () => <PageContainer className={useStyles().root}>This is a Default PageContainer used to pad all the pages.</PageContainer>

export const WithSurface = () => <Surface><PageContainer>This is a Default PageContainer used to pad all the pages.</PageContainer></Surface>

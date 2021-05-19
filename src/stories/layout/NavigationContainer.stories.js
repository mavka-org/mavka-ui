import React from 'react';

import NavigationContainer from '../../components/layout/NavigationContainer';
import { makeStyles } from '@material-ui/core/styles';

export default {
  title: 'Layout/NavigationContainer',
  component: NavigationContainer
};

const useStyles = makeStyles( theme => ({
  root: {
    background: '#000',
    color: '#fff'
  }
}));

export const Default = () => <NavigationContainer className={useStyles().root}>This is a Default NavigationContainer used to pad all the navigation.</NavigationContainer>

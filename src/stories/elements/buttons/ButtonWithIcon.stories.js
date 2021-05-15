import React from 'react';

import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '../../../components/elements/buttons/IconButton';
import ButtonWithIcon from '../../../components/elements/buttons/ButtonWithIcon';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default {
  title: 'Elements/Buttons/ButtonWithIcon',
  component: ButtonWithIcon
};

export const Default = () => <ButtonWithIcon startIcon={<ExpandMoreRoundedIcon />}>математика</ButtonWithIcon>;

import React from 'react';

import Link from '../../components/elements/Link';
import { Typography } from '@material-ui/core';

export default {
  title: 'Elements/Link',
  component: Link
};


export const Default = () => <Typography><Link href='https://google.com' target='_blank'>This is a Default Link for style and external links/new tab.</Link></Typography>

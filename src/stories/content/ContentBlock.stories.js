import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

import ContentBlock from '../../components/content/ContentBlock';

export default {
  title: 'Content/ContentBlock',
  component: ContentBlock
};

export const Default = () => <ContentBlock title="This is title">This is content block's children</ContentBlock>;

export const NoTitle = () => <ContentBlock><Link >Huy</Link> This is content block's children. No title here</ContentBlock>;


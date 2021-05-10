import React from 'react';

import ContentBlock from '../../components/content/ContentBlock';

export default {
  title: 'Content/ContentBlock',
  component: ContentBlock
};

export const Default = () => <ContentBlock title="This is Content Block's title">This is content block's children</ContentBlock>;

export const NoTitle = () => <ContentBlock>This is content block's children. The content block doesn't have a title</ContentBlock>;

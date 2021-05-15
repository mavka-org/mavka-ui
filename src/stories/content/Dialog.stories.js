import React from 'react';

import Dialog from '../../components/content/Dialog';

export default {
  title: 'Content/Dialog',
  component: Dialog
};

// TODO from Material UI
export const Default = () => <Dialog>This is a Default Dialog that pops up with a message for a user</Dialog>;

export const ListDialog = () => <Dialog >This is a dialog with a title and a list in it</Dialog>;

import React from 'react';

import CustomDialog from '../../components/content/CustomDialog';
import Button from '../../components/elements/buttons/Button';

export default {
  title: 'Content/Dialog',
  component: CustomDialog
};

// TODO from Material UI
export const Default = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(prev => !prev)}>Dialog</Button>
      <CustomDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} title="Mavka ZNO">This is a Default Dialog that pops up with a message for a user</CustomDialog>
    </>
  )
};

export const ListDialog = () => <CustomDialog>This is a dialog with a title and a list in it</CustomDialog>;


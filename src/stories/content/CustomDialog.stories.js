import React from 'react';

import CustomDialog from '../../components/content/CustomDialog';
import Button from '../../components/elements/buttons/Button';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'Content/CustomDialog',
  component: CustomDialog
};

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
      <Typography>This is a Dialog with children, controlled by a Button</Typography>
      <Button onClick={() => setOpen(prev => !prev)}>Dialog</Button>
      <CustomDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} title="This is Dialog title">
        This is a Dialog chilldren
      </CustomDialog>
    </>
  )
};


export const WithActions = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography>This is a Dialog with children, controlled by a Button, with actions</Typography>
      <Button onClick={() => setOpen(prev => !prev)}>Dialog</Button>
      <CustomDialog 
        handleClickOpen={handleClickOpen} 
        handleClose={handleClose} 
        open={open} 
        title="This is Dialog title"
        actions={[<Button onClick={handleClose} color="primary" variant="text">Disagree</Button>, <Button onClick={handleClose} color="primary" autofocus>Agree</Button>]}
      >
        This is a Dialog chilldren
      </CustomDialog>
    </>
  )
};

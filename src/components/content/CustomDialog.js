import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const useStyles = props => makeStyles(theme => ({
  dialogContent: {
    paddingTop: 0
  }
}));

export function CustomDialog({ children, ...props }) {
  const classes = useStyles(props)();
  return (
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
            {children}
        </DialogContent>
      </Dialog>
  );
}

CustomDialog.propTypes = {
  /**
   * The component content
   */
  children: PropTypes.node,
  /**
   * Function to run on dialog open
   */
  handleClickOpen: PropTypes.func,
  /**
   * Function to run on dialog close
   */
  handleClose: PropTypes.func,
  /**
   * State of the dialog window
   */
  open: PropTypes.bool
};

export default CustomDialog;

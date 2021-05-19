import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';

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
        {
          props.actions ?
          <DialogActions>
            { props.actions }
          </DialogActions>
          : null
        }
      </Dialog>
  );
}

CustomDialog.propTypes = {
  /**
   * The component content
   */
  children: PropTypes.node,
  /**
   * List of actions for the dialog
   */
  actions: PropTypes.array,
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

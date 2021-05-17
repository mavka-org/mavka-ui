import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from '../elements/buttons/Button';
const useStyles = props => makeStyles(theme => ({

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
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
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
  open: PropTypes.bool,
  /**
   * State of the dialog window
   */
  open: PropTypes.bool,
};

export default CustomDialog;

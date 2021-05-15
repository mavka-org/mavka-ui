import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

// const useStyles = props => makeStyles(theme => ({
//   base: {
//     padding: 0,
//     "&:hover": {
//       backgroundColor: 'transparent'
//     }
//   },
// }));
export const RoundButton = withStyles({
  root: {
    textTransform: 'none',
    borderRadius: '50px',
    height: "fit-content",
    textDecoration: "none",
  },
})(MuiButton);

export function ButtonWithIcon({ children, ...props }) {
  return (
    <RoundButton
      name="selectSubjectButton"
      startIcon={props.startIcon}
      onClick={props.onClick}
    >
      {children}
      
    </RoundButton>);
}

ButtonWithIcon.defaultProps = {
  startIcon: PropTypes.required,

  onClick: PropTypes.onClick,

  children: PropTypes.node.isRequired,
};

export default ButtonWithIcon;

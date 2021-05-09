import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = props => makeStyles( theme => ({
  base: {
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  contained: {
    
  },
  outlined: {
    borderColor: theme.palette[props.color] ? theme.palette[props.color].main : null,
  },
  text: {
    
  }
}));

export function IconButtonBase({ children, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes.base} ${props.className}`;
  return (
    <MuiIconButton {...props} className={classNames} disableElevation centerRipple disableFocusRipple>{children}</MuiIconButton>
  );
}

export default function IconButton({ children, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes[props.variant]} ${props.className}`;
  return (
    <IconButtonBase {...props} className={classNames}>{children}</IconButtonBase>
  );
}

IconButton.propTypes = {
  /**
   * Background color of the button
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * For css customization.
   */
   className: PropTypes.string,
  /**
   * The component content bluh bluh blih
   */
   children: PropTypes.node.isRequired,

};

IconButton.defaultProps = {
  color: 'default',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  onClick: () => {},
};

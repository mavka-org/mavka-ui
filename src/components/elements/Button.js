import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

export default function Button({ children, ...props }){
  return (
      <MuiButton disableElevation disableFocusRipple {...props}>{children}</MuiButton>
  );
}

Button.propTypes = {
  /**
   * Background color of the button
   */
   color: PropTypes.string,
  /**
   * The variant of the button.
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
   * The component content
   */
   children: PropTypes.node.isRequired,
  /**
   * If true, the button has full width
   */
   fullWidth: PropTypes.bool,

};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  onClick: () => {},
};

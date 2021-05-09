import React from 'react';
import PropTypes from 'prop-types';
import get from 'get-value';
import MuiButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = props => makeStyles( theme => (console.log("JHKJHJFHJHJ", props),{
  base: {
    textTransform: 'none'
  },
  contained: {
    
  },
  outlined: {
    borderColor: props.color ? theme.palette[props.color].main : theme.palette.primary.main,
  },
  text: {
    
  },
  info: {
    backgroundColor: get(theme.palette, props.infoBackground) || theme.palette[props.color].main,
    pointerEvents: 'none',
    "&:hover": {
        backgroundColor: get(theme.palette, props.infoBackground) || theme.palette[props.color].main
    }
  }
}));

export function ButtonBase({ children, ...props }){
  console.log("JHKJHJFHJHJ", props.color)
  const classes = useStyles(props)();
  const classNames = `${classes.base} ${props.className}`;
  return (
    <MuiButton {...props} className={classNames} disableElevation centerRipple disableFocusRipple>{children}</MuiButton>
);
}

export default function Button({ children, ...props }){
  console.log("🚀 ~ file: Button.js ~ line 38 ~ Button ~ props", props)
  const classes = useStyles(props)();
  const classNames = `${classes[props.variant]} ${props.info ? classes.info : ''} ${props.className}`;
  if (props.info) props.onClick = () => {} // override onClick
  return (
      <ButtonBase {...props} className={classNames}>{children}</ButtonBase>
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
   * If true, the button will be disabled but preserve its look
   */
  info: PropTypes.bool,
  /**
   * Background color of the button only when info = true.
   */
  infoBackground: PropTypes.string,
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
  info: false,
  disabled: false,
  onClick: () => {},
};

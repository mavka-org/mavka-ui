import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ButtonBase } from '../../components/elements/buttons/Button';
import { getBorderColor, getOverfillColor } from '../../helpers';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = props => makeStyles( theme => ({
    button: {
        border: `4px solid ${getBorderColor(props.selected, props.correctness, theme)}`,
        color: getBorderColor(props.selected, props.correctness, theme),
        'min-width': '35px',
        'max-width': '35px',
        'min-height': '35px',
        'max-height': '35px',
        'border-radius': "100%",
        "position": "relative",
    },
    overfill: {
        "background-color": getOverfillColor(props.selected, props.correctness, theme),
        opacity: "0.15",
        position: "absolute",
        padding: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        'border-radius': "100%",
    },
  }));


export function TestRadioButton({ children, ...props }){
  const classes = useStyles(props)();
  const theme = useTheme();

  return (
      <div>
          <ButtonBase className={classes.button} {...props}>
          <Typography component="div">
            <Box fontWeight="fontWeightMedium" >{props.label}</Box>
           </Typography>
          <div className={classes.overfill}></div>
          </ButtonBase>
      </div>
  );
}

TestRadioButton.propTypes = {
  /**
   * Button label.
   */
  label: PropTypes.string.isRequired,
    /**
   * If user selected the button.
   */
  selected: PropTypes.bool,
  /**
   * If the button contains the correct answer.
   */
  correctness: PropTypes.oneOf(['correct', 'incorrect', 'part-correct']),
  /**
   * Click handler
   */
  onClick: PropTypes.func.isRequired,
  /**
   * For css customization.
   */
   className: PropTypes.string,
  /**
   * The component content
   */
   children: PropTypes.node,

};

TestRadioButton.defaultProps = {
  label: '',
  selected: false,
  correctness: undefined,
  onClick: () => {},
};

export default TestRadioButton;

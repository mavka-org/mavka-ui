import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import Button from './Button'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = props => makeStyles( theme => ({
    button: {
        color: getColorByCorrectness(props.correctness, theme),
        border: `4px solid ${getColorByCorrectness(props.correctness, theme)}`,
        'min-width': '35px',
        'max-width': '35px',
        'min-height': '35px',
        'max-height': '35px',
        'border-radius': "100%",
        "position": "relative"

    },
    overfill: {
        // "background-color": props.selected getColorByCorrectness(props.correctness, theme),
        opacity: "0.15",
        position: "absolute",
        padding: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        'border-radius': "100%",
        "z-index": "-1",
    },
  }));

function getColorByCorrectness(correctness, theme) {
    if (correctness === "correct") {return theme.palette.alternative.green}
    else if (correctness === "incorrect") {return theme.palette.alternative.red}
    else if (correctness === "part-correct") {return theme.palette.alternative.yellow}
    else return theme.palette.alternative.grey
}
  

export default function TestRadioButton({ children, ...props }){
  const classes = useStyles(props)();
  const theme = useTheme();


  return (
      <div>
          <Button className={classes.button} {...props}>{props.label}<div className={classes.overfill}></div></Button>
      </div>
  );
}

Button.propTypes = {
  /**
   * Button label.
   */
  label: PropTypes.bool.isRequired,
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

Button.defaultProps = {
  label: '',
  selected: false,
  correctness: 'incorrect',
  onClick: () => {},
};

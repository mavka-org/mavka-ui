import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = props => makeStyles( theme => ({
  }));

function getBorderColor(selected, correctness, theme) {
    if (correctness) return getColorByCorrectness(correctness, theme)
    else if (selected) return theme.palette.primary.main
    else return theme.palette.alternative.grey
}

function getOverfillColor(selected, correctness, theme) {
    if (selected) {
        if (correctness) return getColorByCorrectness(correctness, theme)
        else return theme.palette.alternative.grey
    } else return null
    
}

function getColorByCorrectness(correctness, theme) {
    if (correctness === "correct") {return theme.palette.alternative.green}
    else if (correctness === "incorrect") {return theme.palette.alternative.red}
    else if (correctness === "part-correct") {return theme.palette.alternative.yellow}
    else return theme.palette.alternative.grey
}
  

export default function TestInputField({ children, ...props }){
  const classes = useStyles(props)();
  const theme = useTheme();


  return (
      <div>TODO</div>
  );
}

TestInputField.propTypes = {
  /**
   * Driven user input.
   */
  userInput: PropTypes.bool.isRequired,
  /**
   * If the field is correct.
   */
  correctness: PropTypes.oneOf(['correct', 'incorrect']),
  /**
   * For css customization.
   */
   className: PropTypes.string,
  /**
   * The component content
   */
   children: PropTypes.node,

};

TestInputField.defaultProps = {
  userInput: undefined,
  correctness: undefined,
};

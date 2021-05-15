import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getColorByCorrectness, getBackgroundColorByCorrectness } from '../../helpers';
import '../../fonts/style.css'

const useStyles = props => makeStyles(theme => ({
  root: {
    width: '90px',
    height: '25px',
    border: `3px solid ${getColorByCorrectness(props.correctness, props.userInput, theme)}`,
    borderRadius:'16px',
    outline:'none',
    paddingLeft:'14px',
    fontFamily:'SF UI Display',
    fontWeight:'600',
    fontSize:'14px',
    color:`${getColorByCorrectness(props.correctness, props.userInput, theme)}`,
    backgroundColor:`${getBackgroundColorByCorrectness(props.correctness, theme)}`
  },
}));


export function TestInputText({ children, ...props }) {
  const classes = useStyles(props)();
  const theme = useTheme();


  return (
    <input className={classes.root} placeholder={props.userInput || 'Відповідь...'} value={props.userInput}/>
  );
}

TestInputText.propTypes = {
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

TestInputText.defaultProps = {
  userInput: undefined,
  correctness: undefined,
};

export default TestInputText;

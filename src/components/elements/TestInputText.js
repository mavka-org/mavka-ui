import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getBackgroundColorByCorrectness, getColorByCorrectness } from '../../helpers';
import { InputBase, TextField } from '@material-ui/core';

const useStyles = (props, value) => makeStyles(theme => ({
  root: {
    maxWidth: '180px',
    border: `3px solid ${getColorByCorrectness(props.correctness, theme, value)}`,
    borderRadius: '100px',
    outline: 'none',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px`,
    color: `${getColorByCorrectness(props.correctness, theme, value)}`,
    backgroundColor: `${getBackgroundColorByCorrectness(props.correctness, theme)}`,
  },
  inputFocused: {
    border: `3px solid ${getColorByCorrectness(props.correctness, theme, 'some value')}`
  }
}));


export function TestInputText({ children, ...props }) {
  const [value, setValue] = useState(props.userInput);
  const classes = useStyles(props, value)();

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) { props.onChange(e); }
  }

  return (
    <InputBase
      className={classes.root}
      classes={{ focused: classes.inputFocused }}
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      inputProps={{
        'aria-label': 'description'
      }}
    />
    // <input
    // className={classes.root}
    // placeholder={props.userInput || null}
    // value={props.userInput ? props.userInput : "Відповідь"}
    // readOnly={props.readOnly}
    // onChange={(event) => props.onChange(event)} />
  );
}

TestInputText.propTypes = {
  /**
   * Driven user input.
   */
  userInput: PropTypes.string,
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
  /**
   * On input change function
   */
  onChange: PropTypes.func,

  readOnly: PropTypes.bool,
};

TestInputText.defaultProps = {
  placeholder: 'Placeholder',
  userInput: undefined,
  correctness: undefined,
};

export default TestInputText;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = props => makeStyles( theme => ({
    root: {
    },
    gridColumn: {
        spacing: theme.spacing(2)
    },
    gridRow: {
        "align-items": "center",
        justifyContent: props.centerContent ? 'center' : 'normal'
    }
  }));

export function TestRadioInputSection({ children, style, ...props }){
  const classes = useStyles(props)();
  const theme = useTheme();

  // Validate props
  let taskLabels = []
  if (props.taskLabels) {taskLabels = props.taskLabels}

  let testRadioButtonsList = props.testRadioButtonsList
  // if testRadioButtonsList is one-dimensional, make it two-dimensional
  if (testRadioButtonsList[0] && testRadioButtonsList[0].constructor !== Array) {
    testRadioButtonsList = [testRadioButtonsList]
  }

  function FormRow(props) {
    const radioButtonRow = props.radioButtonRow
    let row = []

    if (props.taskLabel) {
        row.push(<React.Fragment><Grid item><Typography><strong>{props.taskLabel}:</strong></Typography></Grid></React.Fragment>)
    }

    row.push(radioButtonRow.map((radioButton) => {
        return <React.Fragment>
                    <Grid item>
                        {radioButton}
                    </Grid>
                </React.Fragment>
    }))

    return row
  }

  return (
    <Grid container spacing={1} style={style}>

      {testRadioButtonsList.map((radioButtonRow, idx) => {
          return <Grid container item spacing={1} className={classes.gridRow}>
                      <FormRow radioButtonRow={radioButtonRow} taskLabel={taskLabels[idx]}/>
                  </Grid>
      })}

    </Grid>
  );


}

TestRadioInputSection.propTypes = {
  /**
   * A list of TestRadioButtons to display. Can be 1- or 2-dimensional.
   */
  testRadioButtonsList: PropTypes.array.isRequired,
   /**
   * Array of strings to label tasks
   */
  taskLabels: PropTypes.array,
  /**
   * For css customization.
   */
   className: PropTypes.string,
  /**
   * The component content
   */
   children: PropTypes.node,

};

TestRadioInputSection.defaultProps = {
  testRadioButtonsList: [],
  taskLabels: []
};

export default TestRadioInputSection;

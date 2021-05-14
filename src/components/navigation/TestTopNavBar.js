import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Fade, Slide, Grow, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StatusIcon from '@material-ui/icons/FiberManualRecord';
import PageContainer from '../layout/PageContainer';
import IconButton from '../elements/buttons/IconButton';
import { getColorByCorrectness } from '../../helpers';

const useStyles = props => makeStyles( theme => ({
  header: {
    position: 'relative',
    height: '30px',
  },
  headerGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  collapsedTitle: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1)
  },
  clickable: {
    cursor: 'pointer'
  },
  statusIcon: {
    width: '10px'
  },
  exitToAppIcon: {
    transform: 'scaleX(-1)'
  }
}));

export function TestTopNavBar({ children, ...props }){
  const classes = useStyles(props)();
  const theme = useTheme();

  return (
    <PageContainer>
      <div className={classes.header}>

          <Fade in={!props.collapsed}>
            <Grid className={classes.headerGrid} container alignItems='center'>
              <Grid item><IconButton onClick={props.exitOnClick}><ExitToAppIcon className={classes.exitToAppIcon}/></IconButton></Grid>
            </Grid>
          </Fade>

          <Fade in={props.collapsed}>
            <Grid className={`${classes.headerGrid} ${classes.clickable}`} container alignItems='center' onClick={() => {props.setCollapsed(false)}}>
              <Grid item><MenuIcon/></Grid>
              <Grid className={classes.collapsedTitle} item><Typography variant='h6'>{props.collapsedTitle}</Typography></Grid>
              <Grid item><StatusIcon className={classes.statusIcon} style={{fill: getColorByCorrectness(props.correctness, theme)}}/></Grid>
            </Grid>
          </Fade>

      </div>

      <Slide in={!props.collapsed} timeout={300} unmountOnExit mountOnEnter>
        <div>
          <Grow in={!props.collapsed} timeout={200}>
            <div>
              <Fade in={!props.collapsed} timeout={200}>
                <div>{children}</div>
              </Fade>
            </div>
          </Grow>
        </div>
      </Slide>

    </PageContainer>
  );
}

TestTopNavBar.propTypes = {
  /**
   * When true, the TestTopNavBar collapses. Must hold parent's state
   */
   collapsed: PropTypes.bool,
   /**
   * Parent's setState function on collapsed state
   */
    setCollapsed: PropTypes.func,
    /**
   * Correctness of the current question. Determines the color of the question status indicator
   */
     correctness: PropTypes.func,
  /**
   * Handler for the exit button click
   */
   exitOnClick: PropTypes.func,
  /**
   * Title that shows up in the collapsed version of the TestTopNavBar
   */
  collapsedTitle: PropTypes.string,
  /**
   * Optional content that goes into the subheader of the TestTopNavBar
   */
  children: PropTypes.node,
};

TestTopNavBar.defaultTypes = {
  collapsed: false,
  correctness: null,
  setCollapsed: () => {},
  exitOnClick: () => {},
}

export default TestTopNavBar;

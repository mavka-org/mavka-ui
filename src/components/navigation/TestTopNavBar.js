import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Fade, Slide, Grow, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToAppRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLessRounded';
import StatusIcon from '@material-ui/icons/FiberManualRecord';
import PageContainer from '../layout/PageContainer';
import IconButton from '../elements/buttons/IconButton';
import { getTextLabelByCorrectness } from '../../helpers';

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
    transform: 'scaleX(-1)',
    verticalAlign: 'middle',
  },
  standardBottomPadding: {
    paddingBottom: theme.spacing(1)
  },
  collapseButton: {
    margin: 'auto',
    display: 'block'
  },
  fullWidth: {
    width: '100%'
  },
  verticalAlignMiddle: {
    verticalAlign: 'middle'
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
              <Grid item><MenuIcon className={classes.verticalAlignMiddle}/></Grid>
              <Grid className={classes.collapsedTitle} item><Typography variant='h6'>{props.collapsedTitle}</Typography></Grid>
              <Grid item><Typography variant='caption'>{getTextLabelByCorrectness(props.currentQuestionCorrectness, props.currentQuestionStarted)}</Typography></Grid>
            </Grid>
          </Fade>

      </div>

      {
        children ?
        <Slide in={!props.collapsed} timeout={100} unmountOnExit mountOnEnter>
          <div>
            <Grow in={!props.collapsed} timeout={50}>
              <div>
                <Fade in={!props.collapsed} timeout={50}>
                  <div>
                    <div className={classes.standardBottomPadding}>{children}</div>
                    <div className={classes.fullWidth}><IconButton className={classes.collapseButton} onClick={() => {props.setCollapsed(true)}}><ExpandLessIcon/></IconButton></div>
                  </div>
                </Fade>
              </div>
            </Grow>
          </div>
        </Slide>
        : null
      }

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
    currentQuestionCorrectness: PropTypes.string,
    /**
     * If the current question is submitted. Determines the color of the question status indicator
     */
    currentQuestionStarted: PropTypes.bool,
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

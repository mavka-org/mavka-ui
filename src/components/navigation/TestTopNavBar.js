import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fade, Slide, Grow } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StatusIcon from '@material-ui/icons/FiberManualRecord';
import PageContainer from '../layout/PageContainer';
import IconButton from '../elements/buttons/IconButton';

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
  const [collapsed, setCollapsed] = useState(props.collapsed);
  const classes = useStyles(props)();

  useEffect(() => {
    if (collapsed || props.noCollapse) {
      return;
    }
  
    const handleScroll = () => {
      setCollapsed(true);
    }
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed, props.noCollapse]);

  return (
    <PageContainer>
      <div className={classes.header}>

          <Fade in={!collapsed}>
            <Grid className={classes.headerGrid} container alignItems='center'>
              <Grid item><IconButton onClick={props.exitOnClick}><ExitToAppIcon className={classes.exitToAppIcon}/></IconButton></Grid>
            </Grid>
          </Fade>

          <Fade in={collapsed}>
            <Grid className={`${classes.headerGrid} ${classes.clickable}`} container alignItems='center' onClick={() => {setCollapsed(false)}}>
              <Grid item><MenuIcon/></Grid>
              <Grid className={classes.collapsedTitle} item>{props.collapsedTitle}</Grid>
              <Grid item><StatusIcon className={classes.statusIcon}/></Grid>
            </Grid>
          </Fade>

      </div>

      <Slide in={!collapsed} timeout={300} unmountOnExit mountOnEnter>
        <div>
          <Grow in={!collapsed} timeout={200}>
            <div>
              <Fade in={!collapsed} timeout={200}>
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
   * Handler for the exit button click
   */
   exitOnClick: PropTypes.func,
  /**
   * If true, the TestTopNavBar starts collapsed
   */
  collapsed: PropTypes.bool,
  /**
   * Title that shows up in the collapsed version of the TestTopNavBar
   */
  collapsedTitle: PropTypes.string,
   /**
   * If true, the TestTopNavBar cannot be collapsed or expanded
   */
  noCollapse: PropTypes.bool,
  /**
   * Optional content that goes into the subheader of the TestTopNavBar
   */
  children: PropTypes.node,
};

export default TestTopNavBar;

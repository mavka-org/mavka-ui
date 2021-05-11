import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = props => makeStyles( theme => ({
  root: {
    border: `1px solid ${theme.palette.common.black}`,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  }
}));

export function Surface({ children, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes.root} ${props.className}`;
  return (
    <Box className={classNames}>
      {children}
    </Box>
  );
}

export default Surface;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';

const useStyles = props => makeStyles( theme => ({
  root: {
  }
}));

export function Link({ children, style, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes.root} ${props.className}`;
  return (
      <MuiLink {...props} style={style} className={classNames}>
        {children}
      </MuiLink>
  );
}

export default Link;

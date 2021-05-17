import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = props => makeStyles( theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

export function PageContainer({ children, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes.root} ${props.className}`;
  return (
    <Container maxWidth="sm" className={classNames}>
      {children}
    </Container>
  );
}

export default PageContainer;

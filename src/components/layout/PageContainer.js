import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = props => makeStyles( theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

export function PageContainer({ children, ...props }){
  const classes = useStyles(props)();
  const classNames = `${classes.root} ${props.className}`;
  return (
    <Container className={classNames}>
      {children}
    </Container>
  );
}

export default PageContainer;

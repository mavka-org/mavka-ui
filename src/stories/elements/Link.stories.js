import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../components/elements/Link';
import { Typography } from '@material-ui/core';

export default {
  title: 'Elements/Link',
  component: Link
};

const useStyles = props => makeStyles(theme => ({
  root: {
    "text-decoration": "none",
    '&:hover': {
      "text-decoration": "underline"
    }
  }
}));



export const Default = () => {
  return (
    <Typography><Link href='https://google.com' target='_blank'>This is a Default Link for style and external links/new tab.</Link></Typography>
  )
} 



export const UnderlineOnHover = ({ children, ...props }) => {
  const classes = useStyles(props)();

  return (
    <Typography><Link className={classes.root} href='https://google.com' target='_blank'>This is a Default Link for style and external links/new tab.</Link></Typography>
  )
}

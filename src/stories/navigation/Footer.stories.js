import React from 'react';
import Footer from './../../components/navigation/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@material-ui/core";

export default {
  title: 'Navigation/Footer',
  component: Footer
};

const useStyles = props => makeStyles(theme => ({
    root: {
      "text-decoration": "none",
      '&:hover': {
        "text-decoration": "underline"
      }
    }
  }));

export const Default = ({ children, ...props }) => {
    const classes = useStyles(props)();

    return (
        <Footer
            description = "This is footer description"
            links_array = {[<Link className={classes.root}>Інстаграм</Link>, <Link className={classes.root}>Телеграм</Link>, "hello@mavka.org"] }
        />
    )
}
 


import React from 'react';
import Footer from './../../components/navigation/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@material-ui/core";
import Button from './../../components/elements/buttons/Button';

export default {
  title: 'Navigation/Footer',
  component: Footer
};


export const Default = ({ children, ...props }) => {

    return (
        <Footer
            description = "This is footer description"
            links_array = {[<Link href='/'>Інстаграм</Link>, <Link href='/'>Телеграм</Link>, <Link href='mailto://hello@mavka.org'>hello@mavka.org</Link>] }
        />
    )
}
 


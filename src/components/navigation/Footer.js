import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { ContentBlock } from './../content/ContentBlock'
import PageContainer from '../layout/PageContainer';
import { Typography } from './../style/Typography';




export function Footer({ children, ...props }){

  return (
      <PageContainer>
          <Grid container direction="column">
            <Grid item>
            <Typography style={{textAlign : "center"}}>{props.description}</Typography>
            </Grid>

            <Grid item container direction="row" style={{justifyContent : "space-between"}}>
                {
                    props.links_array.map( (link) => {
                        return <Grid item>{link}</Grid>
                    })
                }
            </Grid>
        </Grid>
      </PageContainer>
    
  );
}


Footer.propTypes = {
  /**
   * Footer description
   */
  description: PropTypes.string,
  /**
   * Array of links to be displayed at the bottom
   */
  links_array: PropTypes.array,
  /**
   * Content that goes inside of the BottomNavBar
   */
  children: PropTypes.node,
};

export default Footer;

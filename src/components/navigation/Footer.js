import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PageContainer from '../layout/PageContainer';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


export function Footer({ children, ...props }){
  const theme = useTheme();

  return (
      <PageContainer>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body2" style={{textAlign: 'center', width: '100%'}}>{props.description}</Typography>
            </Grid>

            <Grid item container direction="row" style={{justifyContent : "center"}}>
                {
                    props.links_array.map( (link) => {
                        return <Grid style={{padding: theme.spacing(1)}} item>{link}</Grid>
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

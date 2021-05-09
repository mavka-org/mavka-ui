import React from 'react';

import MuiTypography from '@material-ui/core/Typography';

export const Typography = (props) => {
  return(
    <MuiTypography {...props}>{props.children}</MuiTypography>
  )
}

export const AllTypography = (props) => {
  return(
    <>
      <Typography variant='h1'>Header 1</Typography>
      <Typography variant='h2'>Header 2</Typography>
      <Typography variant='h3'>Header 3</Typography>
      <Typography variant='h4'>Header 4</Typography>
      <Typography variant='h5'>Header 5</Typography>
      <Typography variant='h6'>Header 6</Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body1'>Body 1</Typography>
      <Typography variant='body2'>Body 2</Typography>
      <Typography variant='overline'>Overline</Typography><br />
      <Typography variant='caption'>Caption</Typography><br />
      <Typography variant='button'>Button</Typography><br />
    </>
  )
}

export default Typography

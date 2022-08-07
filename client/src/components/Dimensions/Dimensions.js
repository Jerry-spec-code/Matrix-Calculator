import React from 'react';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

const Dimensions = ({message, subOne, addOne}) => {
  return (
    <>
    <Grid item>
    <Button variant="contained" 
      color="error" sx={{margin: "0px 10px 0px 0px", padding: "0px 2px"}}
      onClick={subOne}>-</Button>
      </Grid>
      <Grid>
      <Typography variant="h6">
          {message}
      </Typography>
      </Grid>
      <Grid item>
      <Button variant="contained" 
      color="success" sx={{margin: "0px 0px 0px 10px", padding: "0px 2px"}}
      onClick={addOne}>+</Button>
      </Grid>
  </>
  )
}

export default Dimensions;

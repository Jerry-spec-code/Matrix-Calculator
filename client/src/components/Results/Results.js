import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";

const Results = ({matrix}) => {

    if(matrix.length === 1) {
        return (
            <Typography sx={{fontSize: "20px"}}>
                {matrix[0]}
            </Typography>
        )
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            {matrix.map((arr, i) => {
                return (
                    <Grid container justifyContent="center" alignItems="center" rowSpacing={1}>
                        {matrix[i].map((value, j) => {
                            return (
                                <Grid item xs={1}>
                                   <TextField value={matrix[i][j]}></TextField>
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            })}
            </Box>
        </div>
    )
}


export default Results;
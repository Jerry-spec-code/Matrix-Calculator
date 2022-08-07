import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import util from '../../util/util';

const AugmentedMatrix = ({matrix, setMatrix}) => {

    const temp = util.initialize2DArray(matrix.length, matrix.length + 1);
    const update = (value, i, j) => {
        const result = util.initialize2DArray(matrix.length, matrix.length + 1);
        for (let a = 0; a < result.length; a++) {
            for (let b = 0; b < result.length; b++) {
                if(a === i && b === j) {
                    result[a][b] = value;
                }
                else {
                    result[a][b] = matrix[a][b];
                }
            }
        }
        setMatrix(result);
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            {temp.map((arr, i) => {
                return (
                    <Grid container justifyContent="center" alignItems="center" rowSpacing={1}>
                        {temp[i].map((value, j) => {
                            return j === matrix.length? 
                            (
                                <Grid style={{margin : "0px 0px 0px 30px"}}item xs={1}>
                                <TextField onChange={(e) => update(e.target.value, i, j)}></TextField>
                                </Grid>
                            ) : 
                            (
                             <Grid item xs={1}>
                                <TextField onChange={(e) => update(e.target.value, i, j)}></TextField>
                            </Grid> )
                        })}
                    </Grid>
                )
            })}
            </Box>
        </div>
    )
}



export default AugmentedMatrix;
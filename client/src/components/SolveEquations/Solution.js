import React from 'react';
import AugmentedMatrix from '../AugmentedMatrix/AugmentedMatrix';
import routes from "../../config/api";
import data from "../../data/data";
import util from "../../util/util";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

const Solution = ({show}) => {
    const [dim, setDim] = React.useState(3);
    const [results, setResults] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [matrix, setMatrix] = React.useState(util.initialize2DArray(dim, dim + 1));

    React.useEffect(() => {
        if(clicked) {
          setClicked(false);
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(matrix),
          }
          const fetchData = async () => {
            await fetch(routes.solveEquations, requestOptions)
              .then((res) => res.json())
              .then((data) => {
                setResults(data);
                console.log(data);
              })
          };
          fetchData();
        }
      }, [clicked]);

    React.useEffect(() => {
        const temp = util.initialize2DArray(dim, dim + 1)
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (i < matrix.length && j < matrix.length) {
                    temp[i][j] = matrix[i][j];
                }
            }
        }
        setMatrix(temp);
    }, [dim])

    if (!show) {
        return <></>
    }

    const myClick = (e) => {
        e.preventDefault();
        setClicked(true);
    };

    const addOne = () => {
        setDim(dim + 1);
    }

    const subOne = () => {
        setDim(Math.max(2, dim - 1));
    }
    
    return (
    <div>
        <Typography variant="h6">
            {data.operations.solveEquations.description}
        </Typography>
        <Typography variant="h7">
            {"Fill in the augmented matrix: " + data.operations.defaultValues}
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
        <Button variant="contained" 
        color="error" sx={{margin: "0px 10px 0px 0px", padding: "0px 2px"}}
        onClick={subOne}>-</Button>
        </Grid>
        <Grid>
        <Typography variant="h6">
            Current dimension (adjustable): {dim} x {dim + 1}
        </Typography>
        </Grid>
        <Grid item>
        <Button variant="contained" 
        color="success" sx={{margin: "0px 0px 0px 10px", padding: "0px 2px"}}
        onClick={addOne}>+</Button>
        </Grid>
        </Grid>
        <AugmentedMatrix matrix={matrix} setMatrix={setMatrix} />
        <br/>
        <Button sx={{
        margin: "0px 0px 0px 0px", 
        backgroundColor: "black", 
        padding: "0px 5px"}} 
        size="large" 
        variant="contained"
        onClick={myClick}
        >
            <Typography sx={{fontSize: "16px", textTransform:"none"}}>
            Calculate!
            </Typography>
        </Button>
        <br/><br/>
        {results.map((value, index) => {
            return (
                index > 0 && !value.includes("=") ? (
                    <>
                    <br/>
                    <Typography sx={{fontSize: "23px", textTransform:"none"}}>
                    {value}
                    </Typography>
                    </>
                ) : (
                <Typography sx={{fontSize: "23px", textTransform:"none"}}>
                {value}
                </Typography>
                )
                
            )
        })}
    </div>
    )
}

export default Solution;

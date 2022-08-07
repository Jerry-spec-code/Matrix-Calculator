import React from 'react';
import Matrix from './Matrix';
import Results from '../Results/Results';
import Dimensions from '../Dimensions/Dimensions';
import util from "../../util/util";
import data from "../../data/data";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

const Calculate = ({show, description, route}) => {

    const [dim, setDim] = React.useState(3);
    const [results, setResults] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [matrix, setMatrix] = React.useState(util.initialize2DArray(dim, dim));

    React.useEffect(() => {
        if(clicked) {
          setClicked(false);
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(matrix),
          }
          const fetchData = async () => {
            await fetch(route, requestOptions)
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
        const temp = util.initialize2DArray(dim, dim)
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (i < matrix.length && j < matrix.length) {
                    temp[i][j] = matrix[i][j];
                }
            }
        }
        setMatrix(temp);
      }, [dim])

    if(!show) {
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
                {description}
            </Typography>
            <Typography variant="h7">
                {data.operations.defaultValues}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Dimensions message={`Current dimension (adjustable): ${dim} x ${dim}`} subOne={subOne} addOne={addOne}/>
            </Grid>
            <Matrix matrix={matrix} setMatrix={setMatrix} numOfRows={dim} numOfCols={dim}/>
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
            <Results matrix={results}/>
        </div>
    )
}

export default Calculate;

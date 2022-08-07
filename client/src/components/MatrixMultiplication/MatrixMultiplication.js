import React from 'react';
import Results from '../Results/Results';
import Matrix from '../Matrix/Matrix';
import Dimensions from '../Dimensions/Dimensions';
import util from '../../util/util';
import data from "../../data/data";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import routes from '../../config/api';

const MatrixMultiplication = ({show}) => {

    const [dim1, setDim1] = React.useState(3);
    const [dim2, setDim2] = React.useState(3);
    const [dim3, setDim3] = React.useState(3);
    const [results, setResults] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [matrix1, setMatrix1] = React.useState(util.initialize2DArray(dim1, dim2));
    const [matrix2, setMatrix2] = React.useState(util.initialize2DArray(dim2, dim3));

    React.useEffect(() => {
        if(clicked) {
          setClicked(false);
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify([matrix1, matrix2]),
          }
          const fetchData = async () => {
            await fetch(routes.multiplyMatrices, requestOptions)
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
        const temp = util.initialize2DArray(dim1, dim2)
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                if (i < matrix1.length && j < matrix1[i].length) {
                    temp[i][j] = matrix1[i][j];
                }
            }
        }
        setMatrix1(temp);
      }, [dim1, dim2]);

    React.useEffect(() => {
        const temp = util.initialize2DArray(dim2, dim3)
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                if (i < matrix2.length && j < matrix2[i].length) {
                    temp[i][j] = matrix2[i][j];
                }
            }
        }
        setMatrix2(temp);
    }, [dim2, dim3]);

    if(!show) {
        return <></>
    }

    const addOneDim1 = () => {
        setDim1(dim1 + 1);
    }

    const subOneDim1 = () => {
        setDim1(Math.max(2, dim1 - 1));
    }

    const addOneDim2 = () => {
        setDim2(dim2 + 1);
    }

    const subOneDim2 = () => {
        setDim2(Math.max(2, dim2 - 1));
    }

    const addOneDim3 = () => {
        setDim3(dim3 + 1);
    }

    const subOneDim3 = () => {
        setDim3(Math.max(2, dim3 - 1));
    }

    const myClick = (e) => {
        e.preventDefault();
        setClicked(true);
    };

    return (
        <div>
            <br/>
            <Typography variant="h6">
                {data.operations.multiplyMatrices.description}
            </Typography>
            <Typography variant="h7">
                {data.operations.defaultValues}
            </Typography>
            <br/><br/>
            <Button sx={{
            backgroundColor: "black", 
            padding: "0px 5px"}} 
            size="small" 
            variant="contained"
            onClick={myClick}
            >
                <Typography sx={{fontSize: "16px", textTransform:"none"}}>
                Calculate!
                </Typography>
            </Button>
            <br/><br/>
            <Results matrix={results}/>
            <br/>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Dimensions message={`Number of rows: ${dim1}`} subOne={subOneDim1} addOne={addOneDim1}/>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Dimensions message={`Number of columns: ${dim2}`} subOne={subOneDim2} addOne={addOneDim2}/>
            </Grid>
            <Matrix matrix={matrix1} setMatrix={setMatrix1} numOfRows={dim1} numOfCols={dim2} />
            <br/>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Dimensions message={`Number of rows: ${dim2}`} subOne={subOneDim2} addOne={addOneDim2}/>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Dimensions message={`Number of columns: ${dim3}`} subOne={subOneDim3} addOne={addOneDim3}/>
            </Grid>
            <Matrix matrix={matrix2} setMatrix={setMatrix2} numOfRows={dim2} numOfCols={dim3} />
            <br/><br/>
        </div>
    )
}

export default MatrixMultiplication;

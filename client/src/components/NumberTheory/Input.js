import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import routes from "../../config/api";

const Input = ({ setResults }) => {

  const [number, setNumber] = React.useState("");
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if(clicked) {
      setClicked(false);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify([number]),
      }
      const fetchData = async () => {
        await fetch(routes.numberTheory, requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
            console.log(data);
          })
      };
      fetchData();
    }
  }, [clicked]);


  const myClick = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div>
      <br/>
      <TextField size="large" id="input" label="Enter a positive integer" variant="outlined" onChange={(e) => setNumber(e.target.value)}/>
      <Button sx={{
        margin: "0px 0px 0px 100px", 
        backgroundColor: "black", 
        padding: "10px 40px"}} 
        size="large" 
        variant="contained"
        onClick={myClick}>
          <Typography sx={{fontSize: "23px", textTransform:"none"}}>
          Calculate!
          </Typography>
          </Button>
    </div>
  );
};

export default Input;
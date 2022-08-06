import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Input = ({ number, setNumber, setClicked }) => {
  const [temp, setTemp] = React.useState(number);

  const myClick = (e) => {
    e.preventDefault();
    setClicked(true);
    setNumber(temp);
  };

  const update = (e) => {
    setTemp(e.target.value);
  };

  return (
    <div>
      <br/>
      <TextField size="large" id="input" label="Enter a positive integer" variant="outlined" />
      <Button sx={{
        margin: "0px 0px 0px 100px", 
        backgroundColor: "black", 
        padding: "10px 40px"}} 
        size="large" 
        variant="contained">
          <Typography sx={{fontSize: "23px", textTransform:"none"}}>
          Calculate!
          </Typography>
          </Button>
    </div>
  );
};

export default Input;
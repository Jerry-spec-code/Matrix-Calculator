import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Form = ({
  primeFacChecked,
  setPrimeFacChecked,
  primRootChecked,
  setPrimRootChecked,
  lowerPrimeChecked,
  setLowerPrimeChecked,
  unitsChecked,
  setUnitsChecked,
}) => {
  return (
      <div style={{ textAlign: "center", fontSize: "25px" }} className="form">
        Check the properties that you want to display.
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={() => setPrimeFacChecked(!primeFacChecked)} />
            }
            label="The prime factorization of n."
          />
          <FormControlLabel
            control={
              <Checkbox onChange={() => setPrimRootChecked(!primRootChecked)} />
            }
            label="Every primitive root (mod n)."
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => setLowerPrimeChecked(!lowerPrimeChecked)}
              />
            }
            label="Every positive prime below n."
          />
          <FormControlLabel
            control={
              <Checkbox onChange={() => setUnitsChecked(!unitsChecked)} />
            }
            label="All of the units (mod n)."
          />
        </FormGroup>
      </div>
  );
};

export default Form;
import React from 'react'
import Form from "./Form";
import Input from "./Input";

const NumberTheory = ({show}) => {

    const [number, setNumber] = React.useState("");
    const [clicked, setClicked] = React.useState(false);
    const [primeFacChecked, setPrimeFacChecked] = React.useState(false);
    const [primRootChecked, setPrimRootChecked] = React.useState(false);
    const [lowerPrimeChecked, setLowerPrimeChecked] = React.useState(false);
    const [unitsChecked, setUnitsChecked] = React.useState(false);
    
    if(!show) {
        return <></>;
    }

    return (
    <div className="App">
        <h2>
            <Form
            primeFacChecked={primeFacChecked}
            setPrimeFacChecked={setPrimeFacChecked}
            primRootChecked={primRootChecked}
            setPrimRootChecked={setPrimRootChecked}
            lowerPrimeChecked={lowerPrimeChecked}
            setLowerPrimeChecked={setLowerPrimeChecked}
            unitsChecked={unitsChecked}
            setUnitsChecked={setUnitsChecked}
            />
            <Input
            number={number}
            setNumber={setNumber}
            setClicked={setClicked}
            />
        </h2>
    </div>
    )
}

export default NumberTheory;

import React from 'react'
import Form from "./Form";
import Input from "./Input";
import Display from "./Display";

const NumberTheory = ({show}) => {

    const [results, setResults] = React.useState([]);
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
            <Input setResults={setResults}/>
            <Display
            results={results}
            primeFacChecked={primeFacChecked}
            primRootChecked={primRootChecked}
            lowerPrimeChecked={lowerPrimeChecked}
            unitsChecked={unitsChecked}
            />
        </h2>
    </div>
    )
}

export default NumberTheory;

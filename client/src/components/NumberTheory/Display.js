import React from 'react'

const Display = ({results, primeFacChecked, primRootChecked, lowerPrimeChecked, unitsChecked}) => {

    if(results[0] === "error") {
        return <div className="error">{results[1]}</div>;
    }

    if (results.length > 0 && !(primeFacChecked || primRootChecked || lowerPrimeChecked || unitsChecked)) {
        return <div className="error">Please check at least one property!</div>;
    }

    const display = (className, text) => {
        return (
          <div>
            <label className={className}>{text}</label>
            <br /><br />
          </div>
        );
      };

    return (
        <div style={{textAlign: "left"}}>
        <br />
          {primeFacChecked ? display('solve_prime_fac', results[0]) : ""}
          {primRootChecked ? display('solve_prim_roots', results[1]) : ""}
          {lowerPrimeChecked ? display('solve_low_prime', results[2]) : ""}
          {unitsChecked ? display('solve_unit', results[3]) : ""}
        </div>
      );
}

export default Display

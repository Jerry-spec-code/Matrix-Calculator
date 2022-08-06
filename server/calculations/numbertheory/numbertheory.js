export const prime_factorization = (strValue) => {
    const value = parseInt(strValue);
  
    if (value === 1) {
      return "There is no prime factorization. ";
    }
  
    const primes = getPrimesSpecial(value + 1); //Creates a boolean array of size value + 1.
  
    if (primes[value] === 0) {
      return "Here is the prime factorization: " + strValue;
    }
  
    let temp = value;
    let i = 2;
  
    while (primes[temp] === -1) {
      if (primes[i] !== -1) {
        if (temp % i === 0) {
          primes[i]++;
          temp = temp / i;
        } else {
          //The prime does not divide the value
          i++;
        }
      } else {
        //The number is not prime
        i++;
      }
    }
  
    primes[temp]++;
  
    let result = "Here is the prime factorization: ";
    let firstFactor = true;
  
    for (let i = 2; i < value; i++) {
      if (primes[i] > 0) {
        if (firstFactor) {
          firstFactor = false;
          if (primes[i] === 1) {
            result = result + i.toString();
          } else {
            result = result + i.toString() + "^" + primes[i].toString();
          }
        } else {
          if (primes[i] === 1) {
            result = result + " * " + i.toString();
          } else {
            result = result + " * " + i.toString() + "^" + primes[i].toString();
          }
        }
      }
    }
  
    return result;
  };
  
  const getPrimesSpecial = (value) => {
    //Logic: not prime = -1, prime = 0, incriments based on number of times that prime occurs in prime fac.
    const primes = new Array(value);
    primes[0] = -1;
    primes[1] = -1;
  
    for (let i = 2; i < value; i++) {
      primes[i] = 0;
    }
  
    for (let i = 2; i < value; i++) {
      if (primes[i] === 0) {
        for (let j = 2 * i; j < value; j += i) {
          primes[j] = -1;
        }
      }
    }
  
    return primes;
  };
  
  export const lower_primes = (strValue) => {
    const value = parseInt(strValue);
  
    if (value < 3) {
      return "There are no primes less than " + strValue;
    }
  
    const primes = getPrimes(value);
  
    return (
      "Here are all the primes less than " +
      strValue +
      ": " +
      resultsToList(primes, value)
    );
  };
  
  const getPrimes = (value) => {
    const primes = new Array(value);
    primes[0] = false;
    primes[1] = false;
  
    for (let i = 2; i < value; i++) {
      primes[i] = true;
    }
  
    for (let i = 2; i < value; i++) {
      if (primes[i]) {
        for (let j = 2 * i; j < value; j += i) {
          primes[j] = false;
        }
      }
    }
  
    return primes;
  };
  
  export const solution = (strValue) => {
    const value = parseInt(strValue);
  
    if (value < 5) {
      return (
        "Here are all the primitive roots (mod " +
        value.toString() +
        "): " +
        (value - 1).toString()
      );
    }
  
    return primitive_root(value);
  };
  
  export const units = (strValue) => {
    const value = parseInt(strValue);
  
    if (value === 1) {
      return "Here are all the units: 0";
    }
  
    const units = new Array(value);
    boolInit(units, value);
    getResults(units, value);
    let result = "Here are all the units (mod " + strValue + "): ";
    result = result + resultsToList(units, value);
    return result;
  };
  
  export const primitive_root = (value) => {
    const units = new Array(value);
    boolInit(units, value);
    getResults(units, value);
    const phi = numOfTrue(units, value);
    let result =
      "Here are all the primitive roots (mod " + value.toString() + "): ";
    const primRoots = new Array(value);
    arrCopy(primRoots, units);
  
    for (let i = 0; i < value; i++) {
      if (primRoots[i]) {
        if (!checkOrder(i, value, phi)) {
          primRoots[i] = false;
        }
      }
    }
  
    if (numOfTrue(primRoots, value) === 0) {
      return "There are no primitive roots (mod " + value.toString() + ").";
    }
  
    result = result + resultsToList(primRoots, value);
    return result;
  };
  
  const checkOrder = (g, n, phi) => {
    //Checks if the order of g (mod n) is phi
  
    for (let i = 1; i < phi; i++) {
      if (phi % i === 0 && modExpt(g, i, n) === 1) {
        return false;
      }
    }
  
    return true;
  };
  
  const numOfTrue = (arr, value) => {
    let count = 0;
    for (let i = 0; i < value; i++) {
      if (arr[i]) {
        count++;
      }
    }
  
    return count;
  };
  
  const arrCopy = (arr1, arr2) => {
    //copies second array into first array
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] = arr2[i];
    }
  };
  
  const modExpt = (g, a, n) => {
    //Calculates g^a (mod n), where a > 0
    g = g % n; //Reduces g so that 0 <= g < n
    let result = g;
  
    for (let i = 1; i < a; i++) {
      result = result * g;
      if (result > n) {
        result = result % n;
      }
    }
  
    return result;
  };
  
  const boolInit = (units, value) => {
    units[0] = false;
    for (let i = 1; i < value; i++) {
      units[i] = true;
    }
  };
  
  const getResults = (results, value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        for (let j = i; j < value; j += i) {
          results[j] = false;
        }
      }
    }
  };
  
  const resultsToList = (results, value) => {
    let result = "";
    let firstUnit = true;
    for (let i = 1; i < value; i++) {
      if (results[i]) {
        if (firstUnit) {
          firstUnit = false;
          result = result + i.toString();
        } else {
          result = result + ", " + i.toString();
        }
      }
    }
  
    return result;
  };
  
  //Checks if strValue is a postive integer.
  export const errFree = (strValue) => {
    if (strValue.includes(".")) {
      return false;
    }
  
    if (strValue.includes("-")) {
      return false;
    }
  
    for (let i = 0; i < strValue.length; i++) {
      if(strValue.charAt(i) !== ' ' && (strValue.charAt(i) < '0' || strValue.charAt(i) > '9')) {
          return false; 
      }
    }
  
    const value = parseInt(strValue);
    if (Number.isNaN(value)) {
      return false;
    }
  
    if (value === 0) {
      return false;
    }
  
    return true;
  };
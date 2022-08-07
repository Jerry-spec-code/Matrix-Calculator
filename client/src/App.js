import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import PageHeader from './components/PageHeader/PageHeader';
import NumberTheory from './components/NumberTheory/NumberTheory';
import Calculate from './components/Matrix/Calculate';
import MatrixMultiplication from './components/MatrixMultiplication/MatrixMultiplication';
import Solution from './components/SolveEquations/Solution';
import data from './data/data';
import routes from './config/api';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  const cofactor = data.operations.cofactor;
  const inverse = data.operations.inverse;
  const transpose = data.operations.transpose;
  const determinant = data.operations.determinant;

  return (
    <div className="App">
      <PageHeader />
      <Tabs setActiveTab={setActiveTab}/>
      <Solution show={activeTab === 0}/>
      <NumberTheory show={activeTab === 1}/>
      <Calculate show={activeTab === 2} description={cofactor.description} route={routes.cofactor}/>
      <Calculate show={activeTab === 3} description={determinant.description} route={routes.determinant}/>
      <Calculate show={activeTab === 4} description={inverse.description} route={routes.inverse}/>
      <MatrixMultiplication show={activeTab === 5} />
      <Calculate show={activeTab === 6} description={transpose.description} route={routes.transpose}/>
    </div>
  );
}

export default App;

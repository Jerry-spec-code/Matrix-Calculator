import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import PageHeader from './components/PageHeader/PageHeader';
import NumberTheory from './components/NumberTheory/NumberTheory';
import Dimensions from './components/SquareMatrix/Dimensions';
import data from './data/data';
import routes from './config/api';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  const cofactor = data.operations.cofactor;

  return (
    <div className="App">
      <PageHeader />
      <Tabs setActiveTab={setActiveTab}/>
      <NumberTheory show={activeTab === 1}/>
      <Dimensions show={activeTab === 2} description={cofactor.description} route={routes.cofactor}/>
    </div>
  );
}

export default App;

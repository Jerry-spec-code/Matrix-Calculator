import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import PageHeader from './components/PageHeader/PageHeader';
import NumberTheory from './components/NumberTheory/NumberTheory';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="App">
      <PageHeader />
      <Tabs setActiveTab={setActiveTab}/>
      <NumberTheory show={activeTab === 1}/>
    </div>
  );
}

export default App;

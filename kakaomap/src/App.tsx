import React from 'react';
import './App.css';
import MarkerwithInfo from './Map/MarkerwithInfo';
import MarkerswithInfos from './Map/MarkerswithInfos';

function App() {
  return (
    <div className="App">
      <h1>KaKaoMap</h1> 
      <MarkerwithInfo />

      <MarkerswithInfos />
    </div>
  );
}

export default App;

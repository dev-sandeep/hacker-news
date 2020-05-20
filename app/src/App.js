import React from 'react';
import './App.css';
import Header from './Pages/Header'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  return (
    <div className="App">
      <BaseContextProvider>
        <Home />
      </BaseContextProvider>
    </div>
  );
}

export default App;

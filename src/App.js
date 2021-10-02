import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

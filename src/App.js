import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

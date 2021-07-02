import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Listen from "./components/Listen/Listen";
import Draw from "./components/canva/Draw";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Listen} exact />
          <Route path="/draw" component={Draw} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index";

//SCSS
import "./scss/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route
            path="/"
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
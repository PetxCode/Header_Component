import React from "react";
import HomeScreen from "./Component/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Component/HeaderComponent";
import DetailPages from "./Component/DetailPages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/:id" component={DetailPages} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

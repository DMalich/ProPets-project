import "../src/css_modules/App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import MainTemplate from "./components/mainTemplate/MainTemplate";
import Start from './components/startPage/Start';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} component={Start} />
                <Route exact path={['main-template', '/:nav']} component={MainTemplate} />
                <Route exact path="/sign-up/:id" component={Start} />
                <Route exact path="/sign-in/:id" component={Start} />
            </Switch>
        </div>
    );
}

export default App;

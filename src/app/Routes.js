//Roye configuration
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {App} from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Colors from "./components/Colors";
import Virtualized from "./components/Virtualized";
import NoVirtualized from "./components/NoVirtualized";
import React from "react";

const Routes = () =>(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/colors" exact component={Colors} />
                <Route path="/virtualized" exact component={Virtualized} />
                <Route path="/novirtualized" exact component={NoVirtualized} />
                
            </Switch>
        </App>
    </Router>
)

export default Routes;
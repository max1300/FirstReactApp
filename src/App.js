import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';
import Nav from "./Nav";
import UserPage from "./UserPage";
import Users from "./Users";

class App extends Component {
    render = () => {
        return (
            <>
                <Nav />
                <div className="container">
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/user/:id" component={UserPage} />
                                <Route path="/" component={Users} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </>
        );
    };
}

export default App;

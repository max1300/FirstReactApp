import React, {Component} from "react";


class Nav extends Component{
    render = () => (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Premiere React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Liste</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}
export default Nav;
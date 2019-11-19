import React, {Component} from "react";
import './App.scss';
import Nav from "./Nav";
import Axios from "axios";
import UserSearch from "./UserSearch";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        };
    }

    componentDidMount = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
            this.setState({
                users:res.data
            })
        );
    };

    render = () => {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col p-2">
                            <h1>Utilisateurs</h1>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(user =>(
                            <tr className="col-12 col-lg-4" key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <UserSearch/>
                </div>
            </>

        );
    };
}

export default App;

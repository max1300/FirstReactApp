import React, {Component} from "react";

class Thead extends Component {
    render() {
        return <thead className="thead-dark">
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
        </tr>
        </thead>;
    }
}
export default Thead;
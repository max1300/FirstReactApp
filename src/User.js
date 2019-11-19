import React, {Component} from "react";

class User extends Component{
    render() {
        const {name} = this.props.data;

        return <div className="col-12 col-lg-4">{name}</div>
    };
}
export default User;
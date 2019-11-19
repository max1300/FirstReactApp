import React, {Component} from "react";
import User from "./User";


class UserList extends Component{
    render() {
        return this.props.users.map(user => <User data={user} key={user.id} />)
    };
}
export default UserList;
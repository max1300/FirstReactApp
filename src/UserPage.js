import React, {Component} from "react";
import  {getUser} from "./UserService";

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        getUser(id).then(user => this.setState({
            user:user
        }));
    }

    render = () => {
        return this.state.user && (
            <div className="row">
                <div className="col">
                    <h1>{this.state.user.name}</h1>
                    <a href="/">Retour à la liste</a>
                </div>
            </div>
        )
    }
}
export default UserPage;
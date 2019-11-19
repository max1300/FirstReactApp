import React, {Component} from "react";
import  {getUser} from "./UserService";
import { ThreeBounce } from 'better-react-spinkit';

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        setTimeout(() => {
            getUser(id).then(user => this.setState({
                loading:false,
                user:user
            }));
        }, 3000);

    }

    render = () => {

        if(this.state.loading){
            return <div className="loader" style={{textAlign:"center", marginTop:"20%"}}>
                    <ThreeBounce gutter={40} color="blue"/>
                    <br />
                    <ThreeBounce gutter={60} color="green"/>
                    <br />
                    <ThreeBounce gutter={80} color="orange"/>
                    </div>
        }
        return this.state.user && (
            <div className="row">
                <div className="col">
                    <h1>{this.state.user.name}</h1>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="col-12 col-lg-4">
                              <td>{this.state.user.name}</td>
                              <td>{this.state.user.username}</td>
                              <td>{this.state.user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                        <a href="/">Retour à la liste</a>
                </div>
            </div>
        )
    }
}
export default UserPage;
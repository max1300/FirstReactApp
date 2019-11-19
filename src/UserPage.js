import React, {Component} from "react";
import  {getUser} from "./UserService";
import { ThreeBounce } from 'better-react-spinkit';
import * as PropTypes from "prop-types";
import Thead from "./Thead";
import Tbody from "./Tbody";

Tbody.propTypes = {user: PropTypes.any};
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
                        <Thead/>
                        <Tbody user={this.state.user}/>
                    </table>
                    <a href="/">Retour à la liste</a>
                </div>
            </div>
        )
    }
}
export default UserPage;
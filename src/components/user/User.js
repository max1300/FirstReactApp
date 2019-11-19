import React, {Component} from "react";


class User extends Component{
    render = () =>{
        const { id, name } = this.props.data;
        return (
            <div className="col-12 col-lg-4">
                <table className="table table-dark">
                    <tbody>
                    <tr className="col-12 col-lg-4">
                        <td>{name}</td>
                        <td><a href={`/user/${id}`} className="btn btn-info" style={{float:"right"}}>Voir</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default User;
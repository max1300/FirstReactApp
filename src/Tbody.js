import React from "react";

var Tbody = (props) =>{
    return <tbody>
    <tr className="col-12 col-lg-4">
        <td>{props.user.name}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
    </tr>
    </tbody>;
}

export default Tbody;
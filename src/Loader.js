import React, {Component} from "react";
import {ThreeBounce} from "better-react-spinkit";

class Loader extends Component {
    render = () => {
        return <div className="loader" style={{textAlign: "center", marginTop: "20%"}}>
            <ThreeBounce gutter={40} color="blue"/>
            <br/>
            <ThreeBounce gutter={60} color="green"/>
            <br/>
            <ThreeBounce gutter={80} color="orange"/>
        </div>;
    }
}

export default Loader;
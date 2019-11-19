import React, {Component} from "react";

class UserSearch extends Component{
    render = () => {
        const {handleChange, searchTerm} = this.props;

        return(
            <div className="row" style={{marginBottom:"3%", marginTop:"3%", textAlign:"center"}}>
                <div className="col">
                    <input style={{width:"60%", border:"solid 1px black", height:"50px"}}
                    onChange={handleChange}
                    value={searchTerm}
                    placeholder=" Recherche..."
                    />
                </div>
            </div>
        );
    };
}
export default UserSearch;
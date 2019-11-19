import Axios from "axios";
import res from "./constants";

export const getUsers = () => {
    Axios.get(res).then(res =>
        this.setState({
            users:res.data
        })
    );
};
export const getUser = async id => {
    const res = await Axios.get(res + '/'${id});
    return res.data;
}
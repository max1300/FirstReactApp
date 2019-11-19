import Axios from "axios";
import res from "./constants";


export const getUsers = () => {
    return Axios.get(res + `users`).then(
        res => res.data
    );
};
export const getUser = async id => {
    const result = await Axios.get(res + `users/${id}`);
    return result.data;
}
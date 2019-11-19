import Axios from "axios";
import {USER_ENDPOINT} from "./constants";


export const getUsers = () => {
    return Axios.get(USER_ENDPOINT).then(
        res => res.data
    );
};
export const getUser = async id => {
    const result = await Axios.get(USER_ENDPOINT + `/${id}`);
    return result.data;
}
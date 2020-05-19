import React, {useState} from "react";
import axios from "axios";
import { getAdmins } from "../../store/types";
import { useDispatch } from "react-redux";
import UsersPage from "./usersPage";



const UsersGetData = () => {
    const dispath = useDispatch();

    const [dataIsReady, setData] = useState(false);

    axios.get('admins/getAdmins')
        .then(res => {

            const dataArray = res.data;
            dispath(getAdmins(dataArray))
            setData(true)
        })
        .catch(err => {

            console.log(err);

        });

    return (
        dataIsReady && <UsersPage/>
    )

}

export default UsersGetData
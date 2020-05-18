import React from "react";
import axios from "axios";
import { getAdmins } from "../../store/types";
import { useDispatch } from "react-redux";
import UsersPage from "./usersPage";



const UsersGetData = () => {
    const dispath = useDispatch();

    axios.get('admins/getAdmins')
        .then(res => {

            const dataArray = res.data;
            dispath(getAdmins(dataArray))

        })
        .catch(err => {

            console.log(err);

        });

    return (
        <UsersPage/>
    )

}

export default UsersGetData
import {setCurrentAdmin} from "../../store/actions/adminsActions";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EditUserPage from "./editUserPage";
import axios from "axios";


// to send current admin editing data to redux and then in editUserPage take this data to display
const GetCurrentAdminData = (req, res) => {

    const adminId = req.match.params.id; // getting id from URL
    const dispatch = useDispatch();
    const [dataIsReady, setData] = useState(false); // render EditUserPage only if axios request completed


        axios.get(`admins/getAdmin?id=${adminId}`)
            .then(res => {

                const currentAdmin = res.data;
                console.log(currentAdmin)
                dispatch(setCurrentAdmin(currentAdmin))
                setData(true);

            })
            .catch(err => {

                console.log(err);

            });


    return (
        dataIsReady && <EditUserPage/>
    )
}

export default GetCurrentAdminData;
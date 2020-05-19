import React, { useState } from "react";
import {useSelector} from "react-redux";
import axios from "axios";


const EditUserPage = () => {

    const {currentAdmin}  = useSelector(state => state.admins)

    const [firstName, setFirstName] = useState("")
    const changingName = ({target:{value}}) => {
        setFirstName(value)
    }
    const changeName = () => {
        return axios
            .post('admins/change', {
                id:currentAdmin.id,
                first_name: firstName

            })
            .then(res => {
                    console.log(res.config)
            }

            )
            .catch(err => {
                console.log(err)
            })

    }



    return(
        <div>
            <div>Edit user here</div>

            <div><h2>Name: {currentAdmin.first_name}</h2><input onChange={changingName} placeholder={"Type New Name"} type="text"/><button onClick={changeName}>Change</button></div>
            <div><h2>Last Name: {currentAdmin.last_name}</h2><input type="text"/><button>Change</button></div>
            <div><h2>Email: {currentAdmin.user_email}</h2><input type="text"/><button>Change</button></div>
            <div><h2>Password: {currentAdmin.password}</h2><input type="text"/><button>Change</button></div>
        </div>

    )
}

export default EditUserPage;
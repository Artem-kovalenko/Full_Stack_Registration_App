import {setCurrentAdmin} from "../../store/actions/adminsActions";
import React, { useState } from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import history from "../../history";
import axios from "axios";



const EditUserPage = () => {

    const dispatch = useDispatch();

    const {currentAdmin}  = useSelector(state => state.admins)

    const [firstName, setFirstName] = useState(currentAdmin.first_name)
    const changingName = ({target:{value}}) => {
        setFirstName(value)
    }

    const [lastName, setLastName] = useState(currentAdmin.last_name)
    const changingLastName = ({target:{value}}) => {
        setLastName(value)
    }

    const [email, setEmail] = useState(currentAdmin.user_email)
    const changingEmail = ({target:{value}}) => {
        setEmail(value)
    }

    const [password, setPassword] = useState(currentAdmin.password)
    const changingPassword = ({target:{value}}) => {
        setPassword(value)
    }


    const editUser = () => {

        return axios
            .post('admins/change', {
                id:currentAdmin.id,
                first_name: firstName,
                last_name: lastName,
                user_email: email,
                password: password
            })

            .then(() => {
                if (firstName !== "") {currentAdmin.first_name = firstName}
                if (lastName !== "") {currentAdmin.last_name = lastName}
                if (email !== "") {currentAdmin.user_email = email}
                dispatch(setCurrentAdmin(currentAdmin))
                history.push("/users_page")
            })

            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <div><h2>Name: {currentAdmin.first_name}</h2>    <input onChange={changingName} placeholder={"Type New Name"} type="text"/></div>
            <div><h2>Last Name: {currentAdmin.last_name}</h2><input onChange={changingLastName} placeholder={"Type New Last Name"} type="text"/></div>
            <div><h2>Email: {currentAdmin.user_email}</h2>   <input onChange={changingEmail} placeholder={"Type New Email"} type="text"/></div>
            <div><h2>New Password: </h2>  <input onChange={changingPassword} placeholder={"Type New Password"} type="text"/></div>
            <div><button onClick={editUser}>Edit</button></div>
        </div>

    )
}

export default EditUserPage;
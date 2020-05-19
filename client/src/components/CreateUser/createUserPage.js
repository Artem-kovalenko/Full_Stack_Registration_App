import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Form, Input, Button} from "antd";
import {saveUserInfo} from "../../store/types";
import axios from "axios";
import history from "../../history";
import {FromWrapper} from "./createUserStyled";

const CreateUserPage = () => {
    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not validate email!",
            number: "${label} is not a validate number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    const dispatch = useDispatch();

    const {newUser} = useSelector(state => state.newUser)
    console.log(newUser)
    const [firstName, setFirstName] = useState("");
    const firstNameChanging = ({target: {value}}) => {
        setFirstName(value);
    };

    const [lastName, setLastName] = useState("");
    const lastNameChanging = ({target: {value}}) => {
        setLastName(value);
    };

    const [email, setEmail] = useState("");
    const emailChanging = ({target: {value}}) => {
        setEmail(value);
    };

    const [pass, setPass] = useState("");
    const passwordChanging = ({target: {value}}) => {
        setPass(value)
    };

    const sendUserInfo = () => {
        const userInfoPayload = {firstName, lastName, email, pass}
        dispatch(saveUserInfo(userInfoPayload))
    };

    const userAddToDb = () => {
        return axios
            .post('admins/addUser', {
                main_role: "admin",
                first_name: newUser.firstName,
                last_name: newUser.lastName,
                email: newUser.email,
                password: newUser.pass
            })
            .then(res => {
                if (res.data.status === "faild") {
                    alert("This email is already registered")
                } else {
                    history.push('/users_page')
                }
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <FromWrapper>
            <Form onFinish={userAddToDb}
                  validateMessages={validateMessages}
                  labelCol={{span: 9}}
                  wrapperCol={{span: 5}}
                  layout="horizontal"
            >
                <Form.Item
                    name={["user", "first_name"]}
                    label="First Name"
                    rules={[{required: true}]}
                >
                    <Input onChange={firstNameChanging}/>
                </Form.Item>

                <Form.Item
                    name={["user", "last_name"]}
                    label="Last Name"
                    rules={[{required: true}]}
                >
                    <Input onChange={lastNameChanging}/>
                </Form.Item>

                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[{type: "email", required: true}]}
                >
                    <Input onChange={emailChanging}/>
                </Form.Item>

                <Form.Item
                    name={["user", "password"]}
                    label="Password"
                    rules={[{required: true}]}
                >
                    <Input onChange={passwordChanging}/>
                </Form.Item>

                <Form.Item label=" ">
                    <Button onClick={sendUserInfo} type="primary" htmlType="submit">
                        Add User
                    </Button>
                </Form.Item>
            </Form>
        </FromWrapper>
    )
}

export default CreateUserPage
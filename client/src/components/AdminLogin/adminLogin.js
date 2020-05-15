import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { FromWrapper } from "./adminLoginStyled";
import axios from "axios";
import history from '../../history';
const AdminLogin = () => {
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

    const [adminEmail, setadminEmail] = useState("")
    const AdminEmailChanges = ({target: {value}}) => {
        setadminEmail(value)
    }

    const [adminPassword, setAdminPassword] = useState("")
    const AdminPasswordChanges = ({target: {value}}) => {
        setAdminPassword(value)
    }

    const adminLogIn = () => {
        return axios
        .post('admins/login', {
            user_email: adminEmail,
            password: adminPassword
        })
        .then(res => {
            console.log(res)
            if(res.status === 200) {
                if(adminEmail === "superadmin@gmail.com"){
                    history.push("/superAdmin_page")
                } else {history.push("/admin_page")}
               
            } else {
                alert("Wrong email or password")
                console.log(res)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <FromWrapper>
            <h3>Admin Page</h3>
            <Form onFinish={adminLogIn}
                validateMessages={validateMessages}
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                layout="horizontal"
            >
                    <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[{ required: true }]}
                    >
                        <Input onChange={AdminEmailChanges} />
                    </Form.Item>

                    <Form.Item
                    name={["user", "password"]}
                    label="Password"
                    rules={[{ required: true }]}
                    >
                        <Input onChange={AdminPasswordChanges}/>
                    </Form.Item>

                    <Form.Item label="Log in:">
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>

            </Form>
        </FromWrapper>
    );
}

export default AdminLogin
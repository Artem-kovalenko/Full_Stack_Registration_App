import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveData } from "../../store/types";
import { Form, Input, Button } from "antd";
import { FromWrapper } from "./firstRegisterPageStyled";
import "antd/dist/antd.css";

// ReactDOM.render(<DatePicker />, mountNode);
const FirstRegisterPage = () => {
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

    const { participantData } = useSelector(state => state.participantData.data)
 
    // создаём перменные для записи в них данных пользователя и добавляем в обьект который будем дистпатчить
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    //   const [dataArray, setDataArray] = useState([firstName, lastName, email])

    const firstNameChanging = ({ target: { value } }) => {
        setFirstName(value);
    };
    const lastNameChanging = ({ target: { value } }) => {
        setLastName(value);
    };
    const emailChanging = ({ target: { value } }) => {
        setEmail(value);
    };

    const goToNextPage = () => {
        const dataObj = { firstName, lastName, email };
        dispatch(saveData(dataObj))
    };
  
    return (
        <FromWrapper>
            <Form
                validateMessages={validateMessages}
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                layout="horizontal"
            >
                <Form.Item
                name={["user", "first_name"]}
                label="First Name"
                rules={[{ required: true }]}
                >
                    <Input defaultValue={participantData.firstName} onChange={firstNameChanging} />
                </Form.Item>

                <Form.Item
                name={["user", "last_name"]}
                label="Last Name"
                rules={[{ required: true }]}
                >
                    <Input defaultValue={participantData.lastName} onChange={lastNameChanging} />
                </Form.Item>

                <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email", required: true }]}
                >
                    <Input defaultValue={participantData.email} onChange={emailChanging} />
                </Form.Item>

                <Form.Item label="Next Step">
                    <Link to="/second_register">
                        {" "}
                        <Button onClick={goToNextPage}> Click Me</Button>
                    </Link>
                </Form.Item>
            </Form>
        </FromWrapper>
    );
};

export default FirstRegisterPage;

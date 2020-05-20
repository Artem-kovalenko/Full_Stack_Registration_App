import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { participantRegister } from "../../store/types";
import axios from "axios";
import 'antd/dist/antd.css';
import history from '../../history';
import { FromWrapper } from "./secondRegisterPageStyled";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';

const SecondRegisterPage = () => {
    const { RangePicker } = DatePicker;

    const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
    };
    
    const dispatch = useDispatch()
    const { participantData }  = useSelector(state => state.participantData.data)
    const { participantInfo } = useSelector(state => state.participantData.data)

    // === DATE OF ARRIVAL AND DEPARTURE ===
    const [ArrDate, setArrDate] = useState("")
    const [DepDate, setDepDate] = useState("")
    const ArrDepDateChanges = (data) => {
        console.log(data)
        let ArrDateStr =  data[0]._d.toString()
        let AddDateSubstr = ArrDateStr.substr(0, ArrDateStr.length - 51)
    
        let DepDateStr =  data[1]._d.toString()
        let DepDateSubstr = DepDateStr.substr(0, DepDateStr.length - 51)
        
        setArrDate(AddDateSubstr)
        setDepDate(DepDateSubstr);
    }

    // === COMPANY NAME ===
    const [companyName, setCompanyName] = useState("")
    const companyNameChanges = ({target: {value}}) => {
        setCompanyName(value)
    }

    // === COMPANY POSITION ===
    const [companyPosition, setCompanyPosition] = useState("")
    const companyPositionChanges = ({target: {value}}) => {
        setCompanyPosition(value)
    }

    // === COMPANY ROLE ===
    const [companyRole, setCompanyRole] = useState("")
    const selectRoleChanges = (data) => {
        setCompanyRole(data)
    }

    // === GENDER ===
    const [gender, setGender] = useState("")
    const selectGenderChanges = (data)=> {
        setGender(data)
    }

    // === BIRTHDATE ===
    const [birthDate, setBirthDate] = useState("")
    const birthDateChanges = (data)=> {
        setBirthDate(data._i)
        console.log(data)
    }

    // === COUNTRY ===
    const [country, setCountry] = useState("")
    const countryChanges = ({target: {value}}) => {
        setCountry(value)
    }

    const participantSendInfo = () => {
        const participantInfoPayload = { ArrDate, DepDate, companyName, companyPosition, companyRole, gender, birthDate, country }
        dispatch(participantRegister(participantInfoPayload))
    }

    const participantAddToDb = () => {
        return axios
        .post('users/register', {
            main_role: "participant",
            first_name: participantData.firstName,
            last_name: participantData.lastName,
            email: participantData.email,
            arrival: participantInfo.ArrDate,
            departure: participantInfo.DepDate,
            company_name: participantInfo.companyName,
            position_in_company: participantInfo.companyPosition,
            participant_role: participantInfo.companyRole,
            sex: participantInfo.gender,    
            birthday: participantInfo.birthDate,
            county_name: participantInfo.country,
            status: "New"
        })
        .then(res => {
            if(res.data.status === "faild") {
                alert("This email is already registered")
            } else {
                history.push('/success_register')
            }
            console.log(res.data.status)
        })
    } 

    return (
        <FromWrapper>
            <Form onFinish={participantAddToDb}
            validateMessages={validateMessages}
            labelCol={{span: 9}}
            wrapperCol={{span: 5}}
            layout="horizontal"
            initialValues={{
                remember: true,
              }}
            >
                <Form.Item
                    label="Choose your date of arrival and date of departure"
                    name={['user', 'date']}  
                    rules={[
                        {required: true},
                    ]}>
                    <RangePicker onChange={ArrDepDateChanges} />
                </Form.Item>

                <Form.Item
                    label="Company name"
                    name={['user', 'company_name']}
                    rules={[
                    {required: true},
                    ]}
                    >
                    <Input onChange={companyNameChanges} />
                </Form.Item>

                <Form.Item
                    label="Your position in company"
                    name={['user', 'company_position']}
                    rules={[
                    {required: true},
                    ]}
                    >
                    <Input onChange={companyPositionChanges} />
                </Form.Item>

                <Form.Item 
                    label="Role" 
                    name={['user', 'role']}  
                    rules={[
                        {required: true},
                    ]}>
                    <Select onChange={selectRoleChanges}>
                        <Select.Option value="Listener">Listener</Select.Option>
                        <Select.Option value="Speaker">Speaker</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Gender" 
                    name={['user', 'sex']}  
                    rules={[
                        {required: true},
                    ]}>
                    <Select onChange={selectGenderChanges}>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Birthdate"
                    name={['user', 'birthdate']}  
                    rules={[
                        {required: true},
                    ]}>
                    <DatePicker onChange={birthDateChanges} />
                </Form.Item>

                <Form.Item
                    label="Country"
                    name={['user', 'country']}
                    rules={[
                    {required: true},
                    ]}
                    >
                    <Input onChange={countryChanges}/>
                </Form.Item>

                <Form.Item label="Button">
                    <Button onClick={participantSendInfo} type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button>
                        <Link to="/first_register">Go Back</Link>
                    </Button>
                </Form.Item>
            </Form>
        </FromWrapper>
    );
}

export default SecondRegisterPage;
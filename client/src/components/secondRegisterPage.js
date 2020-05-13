import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { participantRegister } from '../store/types'
import axios from "axios";
import 'antd/dist/antd.css';
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


    // === DATE OF ARRIVAL AND DEPARTURE ===
    const [ArrDate, setArrDate] = useState("")
    const [DepDate, setDepDate] = useState("")
    const ArrDepDateChanges = (data) => {
        let ArrDateStr =  data[0]._d.toString()
        let AddDateSubstr = ArrDateStr.substr(0, ArrDateStr.length - 50)
    
        let DepDateStr =  data[1]._d.toString()
        let DepDateSubstr = DepDateStr.substr(0, DepDateStr.length - 50)
        
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
    }

    // === COUNTRY ===
    const [country, setCountry] = useState("")
    const countryChanges = ({target: {value}}) => {
        setCountry(value)
    }

 

    const participantRegister = () => {
        const participantInfo = { ArrDate, DepDate, companyName, companyPosition, companyRole, gender, birthDate, country }
        dispatch(participantRegister(participantInfo))

        // return axios
        // .post('users/register', {
        //     main_role: "test2",
        //     first_name: "test2",
        //     last_name: "test2",
        //     email: "test2@test2.com",
        //     dateofarrivalanddeparture: "12.05.2020-15.05.2020",
        //     company_name: "test2",
        //     position_in_company: "test2",
        //     participant_role: "test2",
        //     sex: "test2",
        //     birthday: "2",
        //     county_name: "test2",
        //     status: "test2"
        // })
        // .then(res => {
        //     console.log("Registered")
        // })
    } 

    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <Form onFinish={participantRegister}
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
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button>
                        <Link to="/first_register">Go Back</Link>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SecondRegisterPage;
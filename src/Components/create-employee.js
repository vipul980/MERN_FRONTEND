
import React, { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeForm from "./employee-form";

const CreateEmployee = () => {
    const [formValues, setFormValues] =
        useState({ firstName: '',lastName:'', email: '', phoneNumber: '', DOB: '' })
    let app = 'http://localhost:3000'
    const onSubmit = employeeObject => {
        axios.post(
            `${app}/api/employee/register`,
            employeeObject)
            .then(res => {
                if (res.status == 200) {
                    window.location.href = "/"
                }    
                else
                    Promise.reject()
            })
            .catch(err => {
                alert('Something went wrong')
            })
    }

    return (
        <EmployeeForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Employee
        </EmployeeForm>
    )
}

export default CreateEmployee

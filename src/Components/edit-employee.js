
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./employee-form";

const EditEmployee = (props) => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        DOB: "",
        viewInput: false
    });

    let userId = window.location.pathname.slice(15);
    let PathName = window.location.pathname.slice(1,14);
    let baseUrl = 'http://localhost:3000'
    const onSubmit = (employeeObject) => {
        axios
            .put(
                `${baseUrl}/api/employee/editProfile/
		${userId}`,
                employeeObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert(res.data.data.message);
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        axios
            .get(
                `${baseUrl}/api/employee/profile/${userId}`
            )
            .then((res) => {
                res.data.data.viewInput = false
                if(PathName == 'view-employee'){
                    res.data.data.viewInput = true
                }
                let dob = res.data.data.DOB.slice(0,10)
                dob = dob.replace(/\-/g, '/')
                res.data.data.DOB = dob
                const { firstName, lastName, email, phoneNumber, DOB, viewInput } = res.data.data;
                setFormValues({ firstName, lastName, email, phoneNumber, DOB, viewInput });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <EmployeeForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update Employee
        </EmployeeForm>
    );
};

export default EditEmployee;

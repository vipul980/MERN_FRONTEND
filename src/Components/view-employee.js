import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeDetail = (props) => {
    const { _id, firstName, lastName, email, phoneNumber, DOB } = props.obj;

    const api = 'http://localhost:3000/'
    const deleteEmployee = () => {
        if(window.confirm("Are you sure you want to delete this employee")){
            axios
                .delete(
                    `${api}api/deleteEmployee/${_id}`)
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.message);
                        window.location.reload();
                    } else Promise.reject();
                })
                .catch((err) => alert("Something went wrong"));
        };
    };

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>

            <td>
                <Link className="edit-link" state={{from: 'edit'}}
                    to={"/edit-employee/" + _id}>
                    Edit
                </Link>
                <Link className="view-link" state={{from: 'view'}}
                    to={"/view-employee/" + _id}>
                    View
                </Link>
                <Button onClick={deleteEmployee}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default EmployeeDetail;

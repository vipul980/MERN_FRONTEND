import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmployeeDetail from "./view-employee";

const EmployeeList = () => {
const [employees, setEmployees] = useState([]);

const baseUrl = 'http://localhost:3000'
useEffect(() => {
	axios
	.get(`${baseUrl}/api/allEmployees`)
	.then(({ data }) => {
		setEmployees(data.data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return employees.map((res, i) => {
	return <EmployeeDetail obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>firstName</th>
			<th>lastName</th>
            <th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default EmployeeList;

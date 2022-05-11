import React from "react";

import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter as Router,
	Route, Routes, Link } from "react-router-dom";


import CreateEmployee from "./Components/create-employee";
import EditEmployee from "./Components/edit-employee";
import EmployeeList from "./Components/employee-list";

const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/"}
				className="nav-link">
					Employee
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-employee"}
					className="nav-link">
					Create Employee
				</Link>
				</Nav>

				<Nav>
				<Link to={"/employee-list"}
					className="nav-link">
					Employee List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
        <Route exact path="/" element={<EmployeeList />}/>
				<Route exact path="/create-employee" element={<CreateEmployee />}/>
				<Route path="/edit-employee/:userId" element={<EditEmployee />}/>
				<Route path="/view-employee/:userId" element={<EditEmployee />} />
				<Route path="/employee-list" element={<EmployeeList />}/>
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;

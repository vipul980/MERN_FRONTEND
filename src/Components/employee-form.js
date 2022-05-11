import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const EmployeeForm = (props) => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
            .email("You have enter an invalid email address")
            .required("Required"),
        phoneNumber: Yup.number()
            .required("Required"),
        DOB: Yup.string()
    });

    let isReadOnly = props.initialValues.viewInput == true ? true : false
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label className="label">
                            first-name
                        </label>
                        <Field name="firstName" type="text" readOnly={isReadOnly}
                            className="form-control"/>
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label className="label">
                            last-name
                        </label>
                        <Field name="lastName" type="text" readOnly={isReadOnly}
                            className="form-control" />
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label className="label">
                            email
                        </label>
                        <Field name="email" type="text" readOnly={isReadOnly}
                            className="form-control" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label className="label">
                            phone-number
                        </label>
                        <Field name="phoneNumber" type="number" readOnly={isReadOnly}
                            className="form-control" />
                        <ErrorMessage
                            name="phoneNumber"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label className="label">
                            Date Of Birth
                        </label>
                        <Field name="DOB"
                            className="form-control" readOnly={isReadOnly} onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")}/>
                        <ErrorMessage
                            name="DOB"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                        {!isReadOnly &&
                        <Button variant="danger" size="lg"
                            block="block" type="submit">
                            {props.children}
                        </Button>}                    
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeForm;

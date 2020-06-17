import React from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import FormikField from "./FormikField/FormikField";
import Button from '@material-ui/core/Button';
import { inject, observer } from "mobx-react";

const FormContainer = inject("store")(observer(({store})=><MyForm store={store}/>))

const MyForm = (props) => {

    const initialValues = {
        city: ''
    };

    const validationSchema = Yup.object().shape({
        city: Yup.string()
            .min(2, 'Too short')
            .required('Please, type city name')
    });

    const handleSubmit = (values) => {
        props.store.setCurrentCity(values.city)
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({dirty, isValid}) => {
                    return (
                        <Form className='form-container'>
                            <div>
                                <FormikField name="city"/>
                            </div>
                            <Button disabled={!dirty || !isValid}
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    className='btn'
                            >Get forecast</Button>
                        </Form>
                    )
                }

                }

            </Formik>
        </div>
    )
};

export default FormContainer;
import React from "react";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormikField from "./FormikField/FormikField";
import Button from '@material-ui/core/Button';
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        textDecoration: 'none'
    },
    btn: {
        marginRight: '20px'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },

}));

const FormContainer = inject("store")(observer(({store}) => <MyForm store={store}/>))

const MyForm = (props) => {

    const classes = useStyles();

    const initialValues = {
        city: ''
    };

    const validationSchema = Yup.object().shape({
        city: Yup.string()
            .min(2, 'Too short')
            .max(25,'Too long')
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
                {
                    ({dirty, isValid}) => {
                        return (
                            <Form className={classes.container}>
                                <div>
                                    <FormikField name="city"/>
                                </div>
                                <div className={classes.btnContainer}>
                                    <Button disabled={!dirty || !isValid}
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            className={classes.btn}
                                    >Get forecast</Button>

                                    <NavLink to={'/list'} className={classes.link}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            color="primary"
                                            className={classes.btn}
                                        >To list</Button>
                                    </NavLink>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
};

export default FormContainer;
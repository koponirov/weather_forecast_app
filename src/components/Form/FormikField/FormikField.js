import React from "react";
import { Field, ErrorMessage} from "formik";
import TextField from '@material-ui/core/TextField';

const FormikField = ({ label = '', name, placeholder = 'Input city name to start, for example: Moscow' }) => {
    return (
        <div className='FormikField'>
            <Field as={TextField}
                   label={label}
                   name={name}
                   helperText={<ErrorMessage name={name}/>}
                   variant="outlined"
                   autoComplete="off"
                   placeholder={placeholder}
                   fullWidth
            />

        </div>
    )
};

export default FormikField;
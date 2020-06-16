import React from "react";
import { Field, ErrorMessage} from "formik";
import TextField from '@material-ui/core/TextField';

const FormikField = ({ label = '', name }) => {
    return (
        <div className='FormikField'>
            <Field as={TextField}
                   label={label}
                   name={name}
                   helperText={<ErrorMessage name={name}/>}
                   variant="outlined"
                   autoComplete="off"
                   fullWidth
            />

        </div>
    )
};

export default FormikField;
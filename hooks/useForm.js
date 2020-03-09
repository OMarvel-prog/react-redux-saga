import { useState } from 'react';

const useForm = (callback, validate, data) => {

    const [values, setValues] = useState(data || {});
    const [errors, setErrors] = useState({});
    const [isTouched, setTouch] = useState({});

    const handleSubmit = () => callback(values);

    const handleChange = (text, name) => {
        setValues(values => ({ ...values, [name]: text }));
        setErrors(validate({ ...values, [name]: text }, isTouched));
    };

    const handleFocus = (name) => {
        setTouch(touches => ({ ...touches, [name]: true }));
        setErrors(validate(values, isTouched));
    };

    return {
        handleChange,
        handleSubmit,
        handleFocus,
        values,
        errors,
    }
};

export default useForm;

import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import useForm from './useForm';
import strings from '../../constants/Strings';
import TextField from '../TextField/TextField';
import {Column} from '../containers/containers'
import {validateLogin} from '../../utils/validators';
import StyledButton from '../StyledButton/StyledButton';
import Link from '../Link/Link';
import EnvelopeSvgIcon from '../svg/EnvelopeSvgIcon';
import EyeSvgIcon from '../svg/EyeSvgIcon';

function LoginForm({onSubmitPressed, onRegistrationPressed, onForgotPasswordPressed, isFetching}) {

    const {
        values,
        errors,
        handleChange,
        handleFocus,
        handleSubmit
    } = useForm(onSubmitPressed, validateLogin);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isPasswordTextVisible, setPasswordTextVisible] = useState(false)

    const checkValid = () => isFetching || !_.isEmpty(errors) || Object.keys(values).length < 2;

    return (
        <Column flex={3}>
            <TextField
                keyboardType='email-address'
                returnKeyType = {'next'}
                icon={EnvelopeSvgIcon}
                refProp={emailRef}
                onFocus={() => handleFocus('email')}
                onSubmitEditing={() => passwordRef.current.focus()}
                blurOnSubmit={false}
                value={values.email}
                error={errors.email}
                placeholder={strings.emailPlaceholder}
                onChangeText={(text) => handleChange(text, 'email')}
            />
            <TextField
                icon={EyeSvgIcon}
                secureTextEntry={!isPasswordTextVisible}
                onSubmitEditing={checkValid() ? () => {} : handleSubmit}
                blurOnSubmit={true}
                refProp={passwordRef}
                onFocus={() => handleFocus('password')}
                value={values.password}
                error={errors.password}
                placeholder={strings.passwordPlaceholder}
                setPasswordTextVisible={setPasswordTextVisible}
                isPasswordTextVisible={isPasswordTextVisible}
                onChangeText={(text) => handleChange(text, 'password')}
            />
            <Link text={strings.forgotPassword} onPress={onForgotPasswordPressed}/>
            <StyledButton
                primary
                major
                disabled={checkValid()}
                title={strings.login}
                onPress={handleSubmit}
            />
            <Link flex={1} subtext={strings.registrationTitle} text={strings.registration} onPress={onRegistrationPressed}/>
        </Column>
    );
}

LoginForm.propTypes = {
    onSubmitPressed: PropTypes.func.isRequired,
    onRegistrationPressed: PropTypes.func.isRequired,
    onForgotPasswordPressed: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import icons from '../../../images/icons.svg';
import { logIn, register } from 'redux/auth/operations';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {
  Label,
  Input,
  StyledInlineErrorMessage,
  StyledInlineMessage,
  ContainerForm,
  LoginIcon,
  InputContainer,
  IconEye,
} from './FormRegister.styled';
import FormButton from '../FormButton/FormButton';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short')
    .required('Please enter your name'),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

function FormRegister() {
  const [passwordVissible, setPasswordVissible] = useState(true);
  const [passwordType, setPasswordType] = useState('password');

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await dispatch(register(values));
          if (register.fulfilled.match(response)) {
            await dispatch(
              logIn({ email: values.email, password: values.password })
            );
          }

          resetForm();
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error('Unauthorized: The user is not authenticated.');
          } else {
            console.error(
              'An error occurred while fetching current user:',
              error
            );
          }
        }
      }}
    >
      {({ errors, touched, handleSubmit, isValid }) => {
        return (
          <ContainerForm>
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <InputContainer>
                <Label
                  htmlFor="name"
                  style={{
                    color:
                      touched.name && !errors.name
                        ? '#3cbc81'
                        : touched.name && errors.name
                        ? '#e74a3b'
                        : 'initial',
                  }}
                >
                  Name
                  <Input
                    type="text"
                    name="name"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="Enter your name"
                    style={{
                      borderColor:
                        touched.name && !errors.name
                          ? '#3cbc81'
                          : touched.name && errors.name
                          ? '#e74a3b'
                          : '#dce3e5',
                    }}
                  />
                </Label>
                {errors.name && touched.name && (
                  <StyledInlineErrorMessage>
                    {errors.name}
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="email"
                  style={{
                    color:
                      touched.email && !errors.email
                        ? '#3cbc81'
                        : touched.email && errors.email
                        ? '#e74a3b'
                        : 'initial',
                  }}
                >
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="on"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="Enter email"
                    style={{
                      borderColor:
                        touched.email && !errors.email
                          ? '#3cbc81'
                          : touched.email && errors.email
                          ? '#e74a3b'
                          : '#dce3e5',
                    }}
                  />
                </Label>
                {errors.email && touched.email && (
                  <StyledInlineErrorMessage>
                    {errors.email}
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
                {!errors.email && touched.email && (
                  <StyledInlineMessage>
                    This is an CORRECT email
                    <LoginIcon>
                      <use href={icons + '#icon-done'}></use>
                    </LoginIcon>
                  </StyledInlineMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="password"
                  style={{
                    color:
                      touched.password && !errors.password
                        ? '#3cbc81'
                        : touched.password && errors.password
                        ? '#e74a3b'
                        : 'initial',
                  }}
                >
                  Password
                  <Input
                    type={passwordType}
                    name="password"
                    autoCorrect="off"
                    autoComplete="password"
                    placeholder="Enter password"
                    style={{
                      borderColor:
                        touched.password && !errors.password
                          ? '#3cbc81'
                          : touched.password && errors.password
                          ? '#e74a3b'
                          : '#dce3e5',
                    }}
                  />
                </Label>
                {errors.password && touched.password && (
                  <StyledInlineErrorMessage>
                    {errors.password}
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
                <IconEye
                  onClick={() => {
                    passwordType === 'password'
                      ? setPasswordType('text')
                      : setPasswordType('password');
                  }}
                >
                  {passwordType === 'password' ? (
                    <AiFillEyeInvisible
                      style={{
                        visibility:
                          touched.password && !errors.password
                            ? 'visible'
                            : 'hidden',
                      }}
                    />
                  ) : (
                    <AiFillEye />
                  )}
                </IconEye>
              </InputContainer>
              <FormButton isValid={isValid}>Sign up</FormButton>
            </Form>
          </ContainerForm>
        );
      }}
    </Formik>
  );
}

export default FormRegister;

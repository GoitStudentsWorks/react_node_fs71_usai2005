import React from 'react';
import {
  Formik,
  Form,
  //  ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import icons from '../../../images/icons.svg';
import { register } from 'redux/auth/operations';

import {
  Label,
  Input,
  StyledInlineErrorMessage,
  StyledInlineMessage,
  ContainerForm,
  LoginIcon,
  InputContainer,
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
  // const [formValues, setFormValues] = useState();
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
          await dispatch(register(values));
          resetForm();

          // console.log(values);
        } catch (error) {
          console.error('Registration failed', error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,

        isValid,
      }) => {
        return (
          <ContainerForm>
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <InputContainer>
                <Label
                  htmlFor="name"
                  valid={touched.email && !errors.name}
                  error={touched.email && errors.name}
                >
                  Name
                  <Input
                    type="text"
                    name="name"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="Enter your name"
                    valid={touched.name && !errors.name}
                    error={touched.name && errors.name}
                  />
                </Label>
                {errors.name && touched.name && (
                  <StyledInlineErrorMessage>
                    {errors.name}
                    <LoginIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                          fill="#E74A3B"
                        />
                      </svg>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="email"
                  valid={touched.email && !errors.email}
                  error={touched.email && errors.email}
                >
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="Enter email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                {errors.email && touched.email && (
                  <StyledInlineErrorMessage>
                    {errors.email}
                    <LoginIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                          fill="#E74A3B"
                        />
                      </svg>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
                {!errors.email && touched.email && (
                  <StyledInlineMessage>
                    This is an CORRECT email
                    <LoginIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01267 11.3543 7.738 11.363C7.46267 11.371 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.246 9.81233 17.238 9.537C17.2293 9.26233 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                          fill="#3CBC81"
                        />
                      </svg>
                    </LoginIcon>
                  </StyledInlineMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="password"
                  valid={touched.password && !errors.password}
                  error={touched.password && errors.password}
                >
                  Password
                  <Input
                    type="text"
                    name="password"
                    autoCorrect="off"
                    autoComplete="password"
                    placeholder="Enter password"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password && (
                  <StyledInlineErrorMessage>
                    {errors.password}
                    <LoginIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                          fill="#E74A3B"
                        />
                      </svg>
                      {/* <img src={ErrorIcon} alt="Error" /> */}
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
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

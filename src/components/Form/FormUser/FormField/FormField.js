import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

// import { ErrorMessage } from '@hookform/error-message';
import {StyledErrorMessage} from '../consts/styledErrorMessage.styled'

import { Label, Input, InputFieldThumb } from './FormField.styled';

export const FormField = ({
  id,
  inputName,
  type,
  placeholder,
  label,
  register,
  // setIsDisabled,
  error,
  setValue,
  // setIsFormDirty,
}) => {
  const isPhoneField = inputName === 'phone';

  return (
    <>
      <InputFieldThumb>
        <Label htmlFor={id}>{label}</Label>
        {isPhoneField ? (
          <InputMask
            id={id}
            mask="+99 (999) 999-9999"
            maskChar="_"
            type="tel"
            placeholder={placeholder}
            {...register(inputName)}
            onChange={e => {
              // console.log('e.target.value', e.target.value);
              setValue(inputName, e.target.value, { shouldDirty: true });
              // setIsDisabled(false);
            }}
          >
            {inputProps => <Input {...inputProps} />}
          </InputMask>
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(inputName)}
            onChange={e => {
              setValue(inputName, e.target.value, { shouldDirty: true });
              // setIsFormDirty(true);
              // setIsDisabled(false);
            }}
          />
        )}
        {error && <StyledErrorMessage>{error.message}</StyledErrorMessage>}
      </InputFieldThumb>
      
    </>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.any,
};

import styled from 'styled-components';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${props => props.theme.variable.secondaryBg};

  & > button {
    padding: 14px 50px;
    margin-top: 0px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      padding: 15px 84px;
    }

    @media (min-width: 1087px) {
      margin-bottom: 60px;
    }
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: grid;
  padding: 0px 18px;
  margin: 40px 0;
  gap: 18px;

  @media (min-width: 768px) {
    max-width: 354px;
    padding: 0px;
  }

  @media (min-width: 1440px) {
    max-width: 1080px;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 24px;
    padding-left: 164px;
    padding-right: 164px;
    margin-top: 44px;
    margin-bottom: 88px;
  }

  @media (min-width: 2560px) {
    max-width: 1440px;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  }
`;

// export const DatePickerWrapper = styled.div`
//   /* font-family: 'Inter', sans-serif;
//   margin-right: 8px; */
//   padding: 18px;
//   & .react-datepicker__today-button {
//     border: none;
//     background: none;
//   }
//   & input {
//     display: inline;

//     text-align: center;
//     padding: 0;
//     background-color: #3e85f3;
//     outline: none;
//     border: none;
//     border-radius: 8px;
//     height: 30px;

//     width: 140px; ///

//     color: white;
//     text-transform: uppercase;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: calc(14 / 18);
//   }
//   & .react-datepicker {
//     background-color: #3e85f3;
//     color: white;
//     border-radius: 16px;
//     padding: 18px;
//   }
//   & .react-datepicker__header {
//     background-color: #3e85f3;
//     border-top-left-radius: 16px;
//     border-top-right-radius: 16px;
//     border-color: #fff;
//   }
//   & .react-datepicker__triangle::after,
//   & .react-datepicker__triangle::before {
//     background-color: #3e85f3;
//     display: none;
//   }
//   & .react-datepicker__current-month {
//     font-size: 16px;
//     margin-bottom: 18px;
//   }
//   & .react-datepicker__day-name,
//   & .react-datepicker__day.react-datepicker__day--outside-month {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   & .react-datepicker__navigation-icon::before {
//     border-color: white;
//   }
//   & .react-datepicker__current-month {
//     color: white;
//   }
//   & .react-datepicker__week:last-of-type {
//     margin-bottom: 0;
//   }
//   & .react-datepicker__week:not(:last-of-type) {
//     margin-bottom: 7px;
//   }
//   & .react-datepicker__day.react-datepicker__day--selected {
//     border-radius: 50%;
//     color: #3e85f3;

//     background-color: rgba(255, 255, 255, 0.5);
//   }
//   & .react-datepicker__day.react-datepicker__day--today {
//     background-color: #fff;
//     border-radius: 50%;
//     color: #3e85f3;
//     font-weight: 500;
//   }
//   & .react-datepicker__day--keyboard-selected {
//     border: none;
//     background: none;
//   }
//   & .react-datepicker__day {
//     color: inherit;
//     font-size: 14px;
//   }
// `;
// export const ControlWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

export const FormUserButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: InterRegular;
  font-size: 14px;
  width: 262px;
  height: 48px;
  padding: 15px, 83px;
  background-color: ${props => props.theme.variable.buttonBg};
  border-radius: 16px;
  color: #fff;

  &:disabled {
    background-color: rgb(163, 168, 173);
    color: ${props => props.theme.variable.btndisActive};
  }

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.variable.btnColorActive};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-family: 'InterRegular';
  font-size: 14px;
  line-height: 15px;

  color: ${props => props.theme.variable.bgReversLabel};
`;

export const DatePickerFormUserWrapper = styled.div`
  /* font-family: 'Inter', sans-serif;
  margin-right: 8px; */
  & .react-datepicker__today-button {
    border: none;
    background: none;
    display: none;
  }
  & input {
    display: inline;

    font-family: 'InterSemiBold';
    font-size: 16px;
    background-color: ${props => props.theme.variable.secondaryBg};
    outline: none;
    border: 1px solid;
    border-color: ${props => props.theme.variable.borderProfileColor};
    border-radius: 8px;
    text-align: center;
    padding: 14px 18px;
    height: 46px;
    width: 354px;

    color: white;
    text-transform: uppercase;

    font-weight: 700;
    line-height: calc(14 / 18);

    ${viewport.mob} {
      height: 42px;
      width: 300px;
      padding: 12px 14px;
      font-size: 14px;
    }

    &::placeholder {
      font-family: 'InterRegularr';
      font-size: 16px;
      line-height: 18px;
      color: 'inherit';
    }
  }

  & .react-datepicker {
    background-color: #3e85f3;
    color: white;
    border-radius: 16px;
    padding: 18px;
  }
  & .react-datepicker__header {
    background-color: #3e85f3;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-color: rgba(255, 255, 255, 0.5);
  }
  & .react-datepicker__triangle::after,
  & .react-datepicker__triangle::before {
    background-color: #3e85f3;
    display: none;
  }
  & .react-datepicker__current-month {
    font-size: 20px;
    margin-bottom: 18px;
  }
  & .react-datepicker__day-name {
    color: #fff;
    font-size: 14px;
  }
  & .react-datepicker__day.react-datepicker__day--outside-month {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }

  & .react-datepicker__navigation {
    top: 24px;
  }

  & .react-datepicker__navigation-icon::before {
    border-color: white;
  }
  & .react-datepicker__current-month {
    color: white;
  }
  & .react-datepicker__week:last-of-type {
    margin-bottom: 0;
  }
  & .react-datepicker__week:not(:last-of-type) {
    margin-bottom: 7px;
  }
  & .react-datepicker__day.react-datepicker__day--selected {
    border-radius: 50%;
    color: #3e85f3;

    background-color: rgba(255, 255, 255, 0.5);
  }
  & .react-datepicker__day.react-datepicker__day--today {
    background-color: #fff;
    border-radius: 50%;
    color: #3e85f3;
    font-weight: 500;
  }
  & .react-datepicker__day--keyboard-selected {
    border: none;
    background: none;
  }
  & .react-datepicker__day {
    color: inherit;
    font-size: 14px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  /* ${viewport.mob} {
    margin-bottom: 18px;
  } */
`;

export const Controls = styled.button`
  display: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  background-color: ${props => props.theme.variable.CalendarLinkColor};
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  color: ${props => props.theme.variable.calendarTextColor};

  &:disabled {
    background-color: ${({ theme }) => theme.variable.mainBackgroundColor};
    color: ${({ theme }) => theme.variable.activeArrowColor};
  }

  @media (min-width: 768px) {
    width: 38px;
  }
  &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right-width: 0.5px;
  }
  &:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left-width: 0.5px;
  }
`;

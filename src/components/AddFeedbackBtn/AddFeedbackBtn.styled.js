import styled from 'styled-components';

export const FeedbackButton = styled.button`
  width: 97px;
  height: 32px;
  padding: 8px 20px;
  margin-right: 18px;
  margin-left: auto;

  cursor: pointer;

  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.variable.buttonBg};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: #ffffff;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(16 / 12);

    @media screen and (min-width: 768px) {
        width: 130px;
        height: 42px;
        padding: 12px 32px;
        margin-right: 24px;

        border-radius: 14px;

        font-size: 14px;
        line-height: calc(18 / 14);
    }

    &:hover {
        background-color: ${props => props.theme.variable.btnColorActive};

        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

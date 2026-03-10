import styled from "styled-components";
import { variables } from "../../utils/variables";

type Props = {
  $isVisible: boolean;
};

export const FormContainer = styled.div`
  .input-error {
    box-shadow: inset 0 0 10px 1px #0e2d74;

    &::placeholder {
      color: #0e2d74;
      visibility: visible;
    }
  }

  display: flex;
  flex-direction: column;
  font-weight: 700;

  span {
    margin-bottom: 16px;
    font-style: Bold;
    font-size: 16px;
  }

  input {
    background: ${variables.secondColor};
    outline: none;
    border: none;
    margin: 8px 0;
    padding: 8px;

    &::placeholder {
      visibility: hidden;
    }
  }

  label {
    font-size: 14px;
  }

  div:first-of-type {
    display: flex;
    gap: 32px;

    input {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;

  button {
    display: block;
  }
`;

export const PaymentContainer = styled.div<Props>`
  .input-error {
    box-shadow: inset 0 0 10px 1px #0e2d74;

    &::placeholder {
      color: #0e2d74;
      visibility: visible;
    }
  }

  display: ${({ $isVisible }) => ($isVisible ? "none" : "flex")};
  flex-direction: column;
  font-weight: 700;

  span {
    margin-bottom: 16px;
    font-style: Bold;
    font-size: 16px;
  }

  input {
    background: ${variables.secondColor};
    outline: none;
    border: none;
    margin: 8px 0;
    padding: 8px;

    &::placeholder {
      visibility: hidden;
    }
  }

  label {
    font-size: 14px;
  }

  div {
    display: flex;
    gap: 32px;

    input {
      width: 100%;
    }

    #label-cvv {
      width: 30%;
    }
  }

  ${ButtonContainer} {
    gap: 8px;
  }
`;

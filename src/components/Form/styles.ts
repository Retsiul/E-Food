import styled from "styled-components";
import { breakPoints, variables } from "../../utils/variables";

type Props = {
  $isVisible: boolean;
};

export const FormContainer = styled.div`
  .input-error {
    box-shadow: inset 0 0 0 2px #a407ff;
  }
  small {
    display: block;
    background: #a407ff;
    padding: 2px;
    margin-top: -8px;
    margin-bottom: 8px;
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

    @media (max-width: ${breakPoints.tablet}) {
      justify-content: space-between;
      gap: 32px;

      label {
        width: 100%;
      }
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
    box-shadow: inset 0 0 0 2px #a407ff;
  }

  small {
    display: block;
    background: #a407ff;
    padding: 2px;
    margin-top: -8px;
    margin-bottom: 8px;
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

    @media (max-width: ${breakPoints.tablet}) {
      justify-content: space-between;
      gap: 32px;

      label {
        width: 100%;
      }
    }
  }

  ${ButtonContainer} {
    gap: 8px;
  }
`;

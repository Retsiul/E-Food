import styled from "styled-components";
import { Container } from "../../utils/styles";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ButtonPay } from "../ListFoodForType/styles";
import { breakPoints } from "../../utils/variables";

type PropsVisible = {
  $isVisible: boolean;
};

export const ContainerPayfood = styled.div<PropsVisible>`
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100vw;
  display: ${({ $isVisible }) => ($isVisible ? "grid" : "none")};
  top: -8px;
  z-index: 1;

  ${Container} {
    width: 100%;
    display: flex;
    margin: auto;
    padding: 0;

    ${Card} {
      position: relative;
      display: grid;
      grid-template-columns: 280px 656px;
      width: 100%;
      padding: 32px;
      gap: 24px;
      border: none;

      @media (max-width: ${breakPoints.tablet}) {
        display: flex;
        flex-direction: column;
      }

      ${InfoCard} {
        padding: 0;
        margin: 0;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: ${breakPoints.tablet}) {
          gap: 10px;
        }

        h3 {
          margin: 0;
        }

        ${ButtonPay} {
          width: 218px;
        }
      }

      img {
        aspect-ratio: 1/1;
      }

      .closed {
        position: absolute;
        right: 8px;
        top: 8px;
        width: 16px;
        aspect-ratio: 1/1;
        cursor: pointer;
      }
    }
  }
`;

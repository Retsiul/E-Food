import styled from "styled-components";
import { Container } from "../../utils/styles";
import { breakPoints, variables } from "../../utils/variables";

type ContainerHeaderProps = {
  $isHome?: boolean;
};

export const AncorHome = styled.a`
  text-decoration: none;
  color: ${variables.featuredColor};
`;

export const ContainerHeader = styled.div<ContainerHeaderProps>`
  padding: 40px;
  height: ${({ $isHome }) => ($isHome ? "384px" : "170px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakPoints.tablet}) {
    gap: ${({ $isHome }) => ($isHome ? "20px" : " ")};
    padding: 20px;
    justify-content: ${({ $isHome }) => ($isHome ? "center" : " ")};
  }

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    @media (max-width: ${breakPoints.tablet}) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 50px;

      ${AncorHome} {
        display: none;
      }
    }
  }

  a,
  ${AncorHome} {
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Slogan = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  position: relative;
  margin-top: 40px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 20px;
  }
`;

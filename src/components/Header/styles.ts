import styled from "styled-components";
import { Container } from "../../utils/styles";

type ContainerHeaderProps = {
  $isHome?: boolean;
};

export const ContainerHeader=styled.div<ContainerHeaderProps>`
padding:40px;
height:${({$isHome})=>($isHome?'384px':'170px')};
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

${Container}{
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
padding:0;}

a{
font-weight: 900;
font-size: 18px;
}
`

export const Slogan= styled.h1`
text-align:center;
font-size:36px;
font-weight: 900;
position:relative;
margin-top:40px;
`
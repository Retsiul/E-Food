import styled from "styled-components"
import { ContainerHeader } from "../Header/styles"
import { variables } from "../../utils/variables"

export const ContainerFooter=styled(ContainerHeader).attrs({as:'footer',})`
 background-color:${variables.secondColor};
 height:298px;

 >div{
 display:flex;
 flex-direction:column;
 height:113.5px;
justify-content:space-between;
 }

 p{
margin-top:20px;
font-size:10px;
font-weight:400;
text-align:center;
}
`

export const SocialMedia = styled.div`
display:flex;
margin-top:20px;
justify-content:space-evenly;

img{
display:block;
width:24px;
}
`
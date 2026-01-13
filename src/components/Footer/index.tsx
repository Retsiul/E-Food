import { Logo } from "../../utils/styles";
import { ContainerFooter, SocialMedia } from "./styles";
import logoInstagram from "../../assets/Instagram.svg";
import logoFacebook from "../../assets/Facebook.svg";
import logoTwitter from "../../assets/Twitter.svg";
const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <Logo></Logo>
        <SocialMedia>
          <img src={logoInstagram} alt={logoInstagram} />
          <img src={logoFacebook} alt={logoFacebook} />
          <img src={logoTwitter} alt={logoTwitter} />
        </SocialMedia>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </ContainerFooter>
  );
};

export default Footer;

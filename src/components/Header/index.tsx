import { Link, useLocation } from "react-router-dom";
import backgroundHeader from "../../assets/fundo.svg";
import { Container, Logo } from "../../utils/styles";
import { ContainerHeader, Slogan } from "./styles";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <ContainerHeader
        $isHome={isHome}
        style={{ backgroundImage: `url(${backgroundHeader})` }}
      >
        {isHome ? (
          <>
            <Logo></Logo>
            <Slogan>
              Viva experiências gastronômicas
              <br />
              no conforto da sua casa
            </Slogan>
          </>
        ) : (
          <Container>
            <a>Restaurantes</a>{" "}
            <Link to="/">
              <Logo></Logo>
            </Link>
            <a>0 produto(s) no carrinho</a>
          </Container>
        )}
      </ContainerHeader>
    </>
  );
};

export default Header;

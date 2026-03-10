import { Link, useLocation } from "react-router-dom";
import backgroundHeader from "../../assets/fundo.svg";
import { Container, Logo } from "../../utils/styles";
import { AncorHome, ContainerHeader, Slogan } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { open } from "../../store/reducers/sliceCart";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  const alerting = () => {
    if (items.length === 0) {
      return alert("Você não tem itens no carrrinho!");
    }
  };

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
            <AncorHome as={Link} to="/">
              Restaurantes
            </AncorHome>{" "}
            <Link to="/">
              <Logo></Logo>
            </Link>
            <a
              onClick={() => {
                openCart();
                alerting();
              }}
            >
              {" "}
              {items.length > 0 ? (
                <>{items.length} produto(s) no carrinho</>
              ) : (
                <>Sem produtos no carrinho</>
              )}
            </a>
          </Container>
        )}
      </ContainerHeader>
    </>
  );
};

export default Header;

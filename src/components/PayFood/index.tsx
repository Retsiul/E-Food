import { Container } from "../../utils/styles";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ContainerPayfood } from "./styles";
import { ButtonPay } from "../ListFoodForType/styles";
import close from "../../assets/icon-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/reducers/sliceCart";
import type { RootReducer } from "../../store";

export type PayFoodProps = {
  openModal?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao?: string;
};

const PayFood = ({
  openModal,
  setOpen,
  foto,
  nome,
  descricao,
  porcao,
  preco,
  id,
}: PayFoodProps) => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.cart.items);

  const addToCart = () => {
    const itemExiste = items.some((item) => item.id === id);

    if (itemExiste) {
      alert("Este prato já está no carrinho");
      return;
    }

    dispatch(add({ id, foto, nome, preco }));
    setOpen?.(false);
  };

  return (
    <>
      {openModal && setOpen && (
        <ContainerPayfood $isVisible={openModal} onClick={() => setOpen(false)}>
          <Container>
            <Card onClick={(e) => e.stopPropagation()}>
              <img src={foto} />
              <InfoCard>
                <div>
                  <h3>{nome}</h3>
                </div>
                <p>{descricao}</p>
                <span> Serve : {porcao}</span>

                <ButtonPay
                  onClick={() => {
                    setOpen(false);
                    addToCart();
                  }}
                >
                  Adicionar ao carrinho - {formatPrice(preco)}
                </ButtonPay>
              </InfoCard>

              <img
                onClick={() => setOpen(false)}
                className="closed"
                src={close}
                alt="icon closed"
              />
            </Card>{" "}
          </Container>
        </ContainerPayfood>
      )}
    </>
  );
};

export default PayFood;

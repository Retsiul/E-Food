import { Container } from "../../utils/styles";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ContainerPayfood } from "./styles";
import { ButtonPay } from "../ListFoodForType/styles";
import close from "../../assets/icon-close.svg";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/sliceCart";

export type PayFoodProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao?: string;
};

const PayFood = ({
  open,
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
  const addToCart = () => {
    dispatch(add({ id, foto, nome, preco }));
  };

  return (
    <>
      {open && setOpen && (
        <ContainerPayfood isVisible={open} onClick={() => setOpen(false)}>
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

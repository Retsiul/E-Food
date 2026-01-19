import { Container } from "../../utils/styles";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ContainerPayfood } from "./styles";
import { ButtonPay } from "../ListFoodForType/styles";
import close from "../../assets/icon-close.svg";

type PayFoodProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const PayFood = ({
  open,
  setOpen,
  foto,
  nome,
  descricao,
  porcao,
  preco,
}: PayFoodProps) => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
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
                <span> Serve:{porcao}</span>

                <ButtonPay>
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

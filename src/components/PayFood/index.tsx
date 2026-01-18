import { Container } from "../../utils/styles";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ContainerPayfood } from "./styles";
import sushi from "../../assets/sushi.png";
import { ButtonPay } from "../ListFoodForType/styles";
import close from "../../assets/icon-close.svg";

type PayFoodProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PayFood = ({ open, setOpen }: PayFoodProps) => {
  return (
    <>
      <ContainerPayfood isVisible={open} onClick={() => setOpen(false)}>
        <Container>
          <Card onClick={(e) => e.stopPropagation()}>
            <img src={sushi} />
            <InfoCard>
              <div>
                <h3>nome do prato</h3>
              </div>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <span> Serve: de 2 a 3 pessoas!</span>

              <ButtonPay>Adicionar ao carrinho</ButtonPay>
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
    </>
  );
};

export default PayFood;

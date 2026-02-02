import { useState } from "react";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ButtonPay } from "./styles";
import PayFood from "../../components/PayFood";
import useOpenForPay from "../ListFoodForType/pay";

type Props = {
  foto: string;
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  porcao: string;
};

const ListFood = ({ foto, nome, descricao, id, preco, porcao }: Props) => {
  const { open, setOpen } = useOpenForPay();
  const [pratoSelecionado, setPratoSelecionado] = useState<Props | null>(null);

  return (
    <>
      <Card>
        <img src={foto} />
        <InfoCard>
          <div>
            <h3>{nome}</h3>
          </div>
          <p>{descricao}</p>
        </InfoCard>
        <ButtonPay
          onClick={() => {
            setPratoSelecionado({ foto, nome, descricao, id, preco, porcao });
            setOpen(true);
          }}
        >
          Saiba mais
        </ButtonPay>
      </Card>

      {pratoSelecionado && (
        <PayFood
          open={open}
          setOpen={setOpen}
          id={pratoSelecionado.id}
          foto={pratoSelecionado.foto}
          nome={pratoSelecionado.nome}
          descricao={pratoSelecionado.descricao}
          porcao={pratoSelecionado.porcao}
          preco={pratoSelecionado.preco}
        />
      )}
    </>
  );
};

export default ListFood;

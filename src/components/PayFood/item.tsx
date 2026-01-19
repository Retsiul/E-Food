import PayFood from ".";
import type { Foods } from "../../pages/Home";

type Props = {
  food: Foods[];
};

const Modal = ({ food }: Props) => {
  return (
    <>
      {food.map((f) => {
        <div key={f.id}>
          {f.cardapio.map((item) => (
            <div key={item.id}>
              <PayFood
                id={item.id}
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                porcao={item.porcao}
                preco={item.preco}
              />
            </div>
          ))}
        </div>;
      })}
    </>
  );
};

export default Modal;

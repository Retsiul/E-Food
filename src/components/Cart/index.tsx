import { useDispatch, useSelector } from "react-redux";
import { Card } from "./styles";
import { CartContainer, Overlay, Sidebar } from "./styles";
import { close, remove } from "../../store/reducers/sliceCart";

import type { RootReducer } from "../../store";

const Cart = () => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer isOpen={isOpen}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((f) => (
            <Card key={f.id}>
              <img src={f.foto} alt={f.nome} />
              <div>
                <h3>{f.nome}</h3>
                <p>{formatPrice(f.preco)}</p>
              </div>
              <button onClick={() => removeItem(f.id)} />
            </Card>
          ))}
        </ul>
        <div>
          <p>
            Valor total <span>{formatPrice(getTotalPrice())}</span>
          </p>

          <button>Continuar para compra</button>
        </div>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;

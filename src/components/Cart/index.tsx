import { useDispatch, useSelector } from "react-redux";
import { Card } from "./styles";
import { CartContainer, Overlay, Sidebar } from "./styles";
import { close, remove } from "../../store/reducers/sliceCart";

import type { RootReducer } from "../../store";
import Form from "../Form";
import { useState } from "react";
import type { CheckoutStep } from "../../types";

const Cart = () => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const [step, setStep] = useState<CheckoutStep>("cart");

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
    setStep("cart");
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const quantityOfItens = items.length;

  return (
    <>
      {quantityOfItens > 0 && (
        <CartContainer $isOpen={isOpen}>
          <Overlay onClick={closeCart} />
          <Sidebar>
            {step === "cart" && (
              <>
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

                  <button onClick={() => setStep("form")}>
                    Continuar para compra
                  </button>
                  <button className="close-cart" onClick={closeCart}>
                    Fechar carrinho
                  </button>
                </div>
              </>
            )}

            {step === "form" && <Form setStep={setStep} />}
          </Sidebar>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IMaskInput } from "react-imask";

import type { CheckoutStep } from "../../types";
import type { RootReducer } from "../../store";
import { usePurchaseMutation } from "../../services/api";

import { ButtonContainer, FormContainer, PaymentContainer } from "./styles";
import { getTotalPrice } from "../ListFoodForType/pay";
import { clear } from "../../store/reducers/sliceCart";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
};

const Form = ({ setStep }: Props) => {
  const [stepForm, setStepForm] = useState<"delivery" | "payment" | "msg">(
    "delivery",
  );

  const { items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation();

  const totalPrice = getTotalPrice(items);

  const form = useFormik({
    initialValues: {
      client: "",
      address: "",
      city: "",
      cep: "",
      addressNumber: "",
      addressComplement: "",
      cardOwner: "",
      cardNumber: "",
      CVV: "",
      expiresMonth: "",
      expiresYear: "",
    },

    validationSchema: Yup.object({
      client: Yup.string().min(4).required("Campo obrigatório"),

      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      cep: Yup.string().required("Campo obrigatório"),
      addressNumber: Yup.string().required("Campo obrigatório"),

      addressComplement: Yup.string(),

      cardOwner: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      cardNumber: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      CVV: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      expiresMonth: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      expiresYear: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),
    }),

    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),

        delivery: {
          receiver: values.client,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.addressComplement,
          },
        },

        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.CVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
      });
    },
  });

  const [closeMsg, setCloseMsg] = useState(false);

  useEffect(() => {
    if (closeMsg) {
      dispatch(clear());
    }
  }, [closeMsg, dispatch]);

  const [triedNext, setTriedNext] = useState(false);

  const isInvalid = (field: keyof typeof form.values) =>
    !!form.errors[field] && (form.submitCount > 0 || triedNext);

  return (
    <form onSubmit={form.handleSubmit}>
      {stepForm === "delivery" && (
        <FormContainer>
          <span>Entrega</span>

          <label htmlFor="client">Quem irá receber</label>
          <input
            id="client"
            name="client"
            value={form.values.client}
            onChange={form.handleChange}
            className={isInvalid("client") ? "input-error" : ""}
            placeholder="Campo Obrigatório, Nome completo"
          />

          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            className={isInvalid("address") ? "input-error" : ""}
            placeholder="Campo Obrigatório"
          />

          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            className={isInvalid("city") ? "input-error" : ""}
            placeholder="Campo Obrigatório"
          />

          <div>
            <label>
              CEP
              <IMaskInput
                type="text"
                mask="00000-000"
                unmask={true}
                id="cep"
                name="cep"
                value={form.values.cep}
                onAccept={(value: string) => form.setFieldValue("cep", value)}
                onBlur={form.handleBlur}
                className={isInvalid("cep") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>

            <label>
              Número
              <IMaskInput
                type="text"
                mask="0000"
                unmask={true}
                id="addressNumber"
                name="addressNumber"
                value={form.values.addressNumber}
                onAccept={(value: string) =>
                  form.setFieldValue("addressNumber", value)
                }
                onBlur={form.handleBlur}
                className={isInvalid("addressNumber") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>
          </div>

          <label htmlFor="addressComplement">Complemento ( Opcional ) </label>
          <input
            id="addressComplement"
            name="addressComplement"
            value={form.values.addressComplement}
            onChange={form.handleChange}
            className={isInvalid("addressComplement") ? "input-error" : ""}
          />

          <ButtonContainer>
            <button
              type="button"
              onClick={async () => {
                setTriedNext(true);

                const errors = await form.validateForm();

                if (
                  !errors.client &&
                  !errors.address &&
                  !errors.city &&
                  !errors.cep &&
                  !errors.addressNumber
                ) {
                  setStepForm("payment");
                }
              }}
            >
              Continuar com o pagamento
            </button>

            <button type="button" onClick={() => setStep("cart")}>
              Voltar para o carrinho
            </button>
          </ButtonContainer>
        </FormContainer>
      )}
      {stepForm === "payment" && (
        <PaymentContainer $isVisible={isSuccess}>
          <span>Pagamento - Valor total R$ {totalPrice.toFixed(2)}</span>

          <label htmlFor="cardOwner">Nome no cartão</label>
          <input
            id="cardOwner"
            name="cardOwner"
            value={form.values.cardOwner}
            onChange={form.handleChange}
            className={isInvalid("cardOwner") ? "input-error" : ""}
            placeholder="Campo Obrigatório"
          />

          <div>
            <label>
              Número do cartão
              <IMaskInput
                type="text"
                mask="0000 0000 0000 0000"
                unmask={true}
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onAccept={(value: string) =>
                  form.setFieldValue("cardNumber", value)
                }
                onBlur={form.handleBlur}
                className={isInvalid("cardNumber") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>

            <label>
              CVV
              <IMaskInput
                type="text"
                mask="000"
                unmask={true}
                id="CVV"
                name="CVV"
                value={form.values.CVV}
                onAccept={(value: string) => form.setFieldValue("CVV", value)}
                onBlur={form.handleBlur}
                className={isInvalid("CVV") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>
          </div>

          <div>
            <label>
              Mês
              <IMaskInput
                type="text"
                mask="00"
                unmask={true}
                id="expiresMonth"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onAccept={(value: string) =>
                  form.setFieldValue("expiresMonth", value)
                }
                onBlur={form.handleBlur}
                className={isInvalid("expiresMonth") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>

            <label>
              Ano
              <IMaskInput
                type="text"
                mask="0000"
                unmask={true}
                id="expiresYear"
                name="expiresYear"
                value={form.values.expiresYear}
                onAccept={(value: string) =>
                  form.setFieldValue("expiresYear", value)
                }
                onBlur={form.handleBlur}
                className={isInvalid("expiresYear") ? "input-error" : ""}
                placeholder="Campo Obrigatório"
              />
            </label>
          </div>

          <ButtonContainer>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Finalizando..." : "Finalizar pagamento"}
            </button>

            <button type="button" onClick={() => setStepForm("delivery")}>
              Editar informações
            </button>
          </ButtonContainer>
        </PaymentContainer>
      )}

      {isSuccess && (
        <div className="msg-success">
          <span>Pedido realizado - {data.orderId}</span>

          <p>
            Estamos felizes em informar que seu pedido já está sendo preparado.
          </p>

          <p>
            Nossos entregadores não estão autorizados a realizar cobranças
            extras.
          </p>

          <button
            type="button"
            onClick={() => {
              setCloseMsg(true);
            }}
          >
            Concluir
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;

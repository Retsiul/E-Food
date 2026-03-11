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
      client: Yup.string()
        .matches(/^[A-Za-zÀ-ÿ\s'-]+$/, "Digite apenas letras")
        .min(4, "Nome muito curto")
        .required("Campo obrigatório"),

      address: Yup.string()
        .matches(/^[A-Za-zÀ-ÿ0-9\s,.-]+$/, "Endereço inválido")
        .min(5, "Endereço muito curto")
        .required("Campo obrigatório"),

      city: Yup.string()
        .matches(/^[A-Za-zÀ-ÿ\s'-]+$/, "Digite apenas letras")
        .min(3, "Cidade inválida")
        .required("Campo obrigatório"),

      cep: Yup.string()
        .length(8, "CEP deve ter 8 dígitos")
        .required("Campo obrigatório"),

      addressNumber: Yup.string()
        .min(1, "Número inválido")
        .required("Campo obrigatório"),

      addressComplement: Yup.string(),

      cardOwner: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) =>
          schema
            .matches(/^[A-Za-zÀ-ÿ\s'-]+$/, "Digite apenas letras")
            .min(4, "Nome muito curto")
            .required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      cardNumber: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) =>
          schema
            .length(16, "Cartão deve ter 16 dígitos")
            .required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      CVV: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) =>
          schema
            .length(3, "CVV deve ter 3 dígitos")
            .required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      expiresMonth: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) =>
          schema
            .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido (01 a 12) ")
            .required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),

      expiresYear: Yup.string().when([], {
        is: () => stepForm === "payment",
        then: (schema) =>
          schema
            .matches(/^\d{4}$/, "Digite os 4 dígitos do ano")
            .required("Campo obrigatório"),
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
    !!form.errors[field] &&
    (form.touched[field] || form.submitCount > 0 || triedNext);

  const isInvalidCard = (field: keyof typeof form.values) =>
    !!form.errors[field] && (form.touched[field] || form.submitCount > 0);

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
            onBlur={form.handleBlur}
            className={isInvalid("client") ? "input-error" : ""}
          />
          {isInvalid("client") && <small>{form.errors.client}</small>}

          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={isInvalid("address") ? "input-error" : ""}
          />
          {isInvalid("address") && <small>{form.errors.address}</small>}

          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={isInvalid("city") ? "input-error" : ""}
          />
          {isInvalid("city") && <small>{form.errors.city}</small>}

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
              />
              {isInvalid("cep") && <small>{form.errors.cep}</small>}
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
              />
              {isInvalid("addressNumber") && (
                <small>{form.errors.addressNumber}</small>
              )}
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
            onBlur={form.handleBlur}
            className={isInvalidCard("cardOwner") ? "input-error" : ""}
          />
          {isInvalidCard("cardOwner") && <small>{form.errors.cardOwner}</small>}

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
                className={isInvalidCard("cardNumber") ? "input-error" : ""}
              />
              {isInvalidCard("cardNumber") && (
                <small>{form.errors.cardNumber}</small>
              )}
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
                className={isInvalidCard("CVV") ? "input-error" : ""}
              />
              {isInvalidCard("CVV") && <small>{form.errors.CVV}</small>}
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
                className={isInvalidCard("expiresMonth") ? "input-error" : ""}
              />
              {isInvalidCard("expiresMonth") && (
                <small>{form.errors.expiresMonth}</small>
              )}
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
                className={isInvalidCard("expiresYear") ? "input-error" : ""}
              />
              {isInvalidCard("expiresYear") && (
                <small>{form.errors.expiresYear}</small>
              )}
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

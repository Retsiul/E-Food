import spaghetti from "../../assets/spaghetti.png";
import { Card, InfoCard } from "../HomeFeaturedFood/styles";
import { ButtonPay, ContainerList, HeaderFooter } from "./styles";
import sushi from "../../assets/sushi.png";
import { Container } from "../../utils/styles";
import PayFood from "../../components/PayFood";
import useOpenForPay from "../ListFoodForType/pay";
const ListFood = () => {
  const { open, setOpen } = useOpenForPay();

  return (
    <>
      <HeaderFooter
        style={{
          backgroundImage: `url(${spaghetti})`,
          height: "280px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h2>tipo do prato </h2>
          <h1>Nome do Restaurante </h1>
        </Container>
      </HeaderFooter>
      <ContainerList $home={false}>
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>{" "}
        <Card>
          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!
            </p>
          </InfoCard>
          <ButtonPay onClick={() => setOpen(true)}>
            Adicionar ao carrinho
          </ButtonPay>
        </Card>
      </ContainerList>
      <PayFood open={open} setOpen={setOpen} />
    </>
  );
};
export default ListFood;

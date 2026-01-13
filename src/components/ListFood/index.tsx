import spaghetti from "../../assets/spaghetti.png";
import { Card, InfoCard } from "../FeatureFood/styles";
import { ContainerList, HeaderFooter } from "./styles";
import sushi from "../../assets/sushi.png";
import { Container } from "../../utils/styles";

const ListFood = () => {
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
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
          <button>Adicionar ao carrinho</button>
        </Card>
      </ContainerList>
    </>
  );
};
export default ListFood;

import { Container } from "../../utils/styles";
import { Card, ContainerTag, InfoCard, Tag } from "./styles";
import sushi from "../../assets/sushi.png";
import spaghetti from "../../assets/spaghetti.png";
import favorite from "../../assets/favorite.svg";
import { Link } from "react-router-dom";

export const FeaturedFood = () => {
  return (
    <>
      <Container $home={true}>
        <Card>
          <ContainerTag>
            <Tag $variant="badge">em destaque</Tag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>

          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>
        <Card>
          <ContainerTag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>
          <img src={spaghetti} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>
        <Card>
          <ContainerTag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>

          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>
        <Card>
          <ContainerTag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>
          <img src={spaghetti} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>{" "}
        <Card>
          <ContainerTag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>

          <img src={sushi} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>
        <Card>
          <ContainerTag>
            <Tag $variant="badge">tipo de prato</Tag>
          </ContainerTag>
          <img src={spaghetti} />
          <InfoCard>
            <div>
              <h3>nome do prato</h3>
              <h3>
                4.9 <img src={favorite} alt="" />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sint nisi itaque debitis placeat explicabo natus laboriosam omnis
              unde quae fugiat eius laudantium impedit et harum recusandae,
              quasi animi? Vitae!{" "}
            </p>
          </InfoCard>
          <Tag as={Link} to="/list" $variant="button">
            Saiba mais
          </Tag>
        </Card>
      </Container>
    </>
  );
};

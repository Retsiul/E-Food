import ListFood from ".";
import type { Foods } from "../../pages/Home";
import { Container } from "../../utils/styles";
import { ContainerList, HeaderFooter } from "./styles";

type PropsListType = {
  foodType: Foods[];
};

const FoodListForType = ({ foodType }: PropsListType) => {
  return (
    <>
      {foodType.map((f) => (
        <div key={f.id}>
          <HeaderFooter
            style={{
              backgroundImage: `url(${f.capa})`,
              height: "280px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <h2>{f.tipo}</h2>
              <h1>{f.titulo} </h1>
            </Container>
          </HeaderFooter>

          <ContainerList $home={false}>
            {f.cardapio.map((item) => (
              <li key={item.id}>
                <ListFood
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  descricao={item.descricao}
                  preco={item.preco}
                  porcao={item.porcao}
                />
              </li>
            ))}
          </ContainerList>
        </div>
      ))}
    </>
  );
};
export default FoodListForType;

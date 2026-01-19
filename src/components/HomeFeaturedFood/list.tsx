import FeaturedFood from ".";
import type { Foods } from "../../pages/Home";
import { Container } from "../../utils/styles";

type PropsHomeList = {
  food: Foods[];
};

const HomeList = ({ food }: PropsHomeList) => {
  return (
    <Container as="ul" $home={true}>
      {food.map((f) => (
        <li key={f.id}>
          <FeaturedFood
            id={f.id}
            titulo={f.titulo}
            destacado={f.destacado}
            tipo={f.tipo}
            avaliacao={f.avaliacao}
            descricao={f.descricao}
            capa={f.capa}
          />
        </li>
      ))}
    </Container>
  );
};

export default HomeList;

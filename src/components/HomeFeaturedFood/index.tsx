import { Card, ContainerTag, InfoCard, Tag } from "./styles";
import favorite from "../../assets/favorite.svg";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

const FeaturedFood = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  id,
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + "...";
    }
    return descricao;
  };

  return (
    <>
      <Card>
        <ContainerTag>
          {destacado && <Tag $variant="badge">Destaque da semana</Tag>}
          <Tag $variant="badge">{tipo}</Tag>
        </ContainerTag>

        <img src={capa} alt={titulo} />
        <InfoCard>
          <div>
            <h3>{titulo}</h3>
            <h3>
              {avaliacao} <img src={favorite} alt="icone de favorito" />
            </h3>
          </div>
          <p>{getDescription(descricao)}</p>
        </InfoCard>
        <Tag as={Link} to={`/list/${id}`} $variant="button">
          Saiba mais
        </Tag>
      </Card>
    </>
  );
};

export default FeaturedFood;

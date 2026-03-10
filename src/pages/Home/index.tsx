import HomeList from "../../components/HomeFeaturedFood/list";
import { useGetRestaurantsQuery } from "../../services/api";

export interface Foods {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;

  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    },
  ];
}

const Home = () => {
  const { data: restaurants = [], isLoading: isLoadingRestaurants } =
    useGetRestaurantsQuery();

  return (
    <>
      <HomeList food={restaurants} isLoading={isLoadingRestaurants} />
    </>
  );
};

export default Home;

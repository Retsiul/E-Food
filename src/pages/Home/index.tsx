import { useEffect, useState } from "react";
import HomeList from "../../components/HomeFeaturedFood/list";

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
  console.log(
    "Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo."
      .length,
  );

  const [listFoods, setLisFoods] = useState<Foods[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((resp) => resp.json())
      .then((resp) => setLisFoods(resp));
  }, []);

  return (
    <>
      <HomeList food={listFoods} />
    </>
  );
};

export default Home;

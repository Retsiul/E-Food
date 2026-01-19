import { useEffect, useState } from "react";
import type { Foods } from "../Home";
import FoodListForType from "../../components/ListFoodForType/list";
import { useParams } from "react-router-dom";

const List = () => {
  const { id } = useParams();

  const [listType, setLisType] = useState<Foods | null>(null);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setLisType(resp));
  }, [id]);

  return <>{listType && <FoodListForType foodType={[listType]} />}</>;
};

export default List;

import FoodListForType from "../../components/ListFoodForType/list";
import { useParams } from "react-router-dom";
import { useGetListQuery } from "../../services/api";

type ListParans = {
  id: string;
};

const List = () => {
  const { id } = useParams() as ListParans;
  const { data: list, isLoading: isLoadingList } = useGetListQuery(id);
  if (!list) return null;
  return (
    <>
      <FoodListForType foodType={[list]} isLoading={isLoadingList} />
    </>
  );
};

export default List;

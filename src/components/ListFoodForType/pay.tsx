import { useState } from "react";
import type { CartItem } from "../../types";

const useOpenForPay = () => {
  const [openPay, setOpenPay] = useState(false);

  return { openPay, setOpenPay };
};

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.preco, 0);
};

export default useOpenForPay;

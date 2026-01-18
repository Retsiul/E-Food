import { useState } from "react";

const useOpenForPay = () => {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
};

export default useOpenForPay;

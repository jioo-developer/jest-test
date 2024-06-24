import { useContext } from "react";

import OrderContext from "./contextInfo";

const useOrder = () => useContext(OrderContext);

export default useOrder;

import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/cartContext";

import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <div>
      {total}

      <BsCart4 />
    </div>
  );
};

export default CartWidget;

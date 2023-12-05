import { singleProduct, singleUser } from "../../data";
import Single from "../single/Single";

function Product() {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;

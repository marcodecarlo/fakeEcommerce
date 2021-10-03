import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cards from "../components/Cards";
import Spinner from "../components/Spinner";

import * as productActions from "../redux/actions/productActions";
import * as cartActions from "../redux/actions/cartActions";
import ShoppingCart from "../components/ShoppingCart";

const HomePage = ({ loading, product, loadProduct, addToCart }) => {
  const [error, setError] = useState();
  const [shoppingCart, setShoppingCart] = useState({
    userId: 0,
    date: new Date().toISOString().split("T")[0],
    products: [],
  });

  useEffect(() => {
    loadProduct().catch((error) => {
      setError(error);
    });
  }, []);

  const handleAddToCart = (id, qty) => {
    let product = {
        productId : id,
        quantity : qty
    }
    shoppingCart.products.push(product);

    addToCart(shoppingCart).catch((error) => {
      setError(error);
    });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Error
              </h2>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <ShoppingCart />
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                I nostri prodotti
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {product &&
                  product.map((ele, index) => (
                    <Cards product={ele} handleAddToCart={handleAddToCart} />
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    product: state.product,
    cart: state.cart,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loadProduct: bindActionCreators(productActions.loadProduct, dispatch),
  addToCart: bindActionCreators(cartActions.addToCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

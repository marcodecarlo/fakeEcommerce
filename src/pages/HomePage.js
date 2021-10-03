import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cards from "../components/Cards";
import Spinner from "../components/Spinner";

import * as productActions from "../redux/actions/productActions";

const HomePage = ({ loading, product, loadProduct }) => {
  const [error, setError] = useState();

  useEffect(() => {
    loadProduct().catch((error) => {
      setError(error);
    });
  }, []);

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
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                I nostri prodotti
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {product &&
                  product.map((ele, index) => <Cards product={ele} />)}
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
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loadProduct: bindActionCreators(productActions.loadProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

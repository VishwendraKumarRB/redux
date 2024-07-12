import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/Action";
import Home from "../components/Home";
// import { ADD_TO_CART } from "../services/Constants";

const mapStateToProps = (state: any) => ({
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch: any) => ({
  addToCartHandler: (data: any) => dispatch(addToCart(data)),
  removeToCartHandler: (data: any) => dispatch(removeToCart(data)),

  //     return {

  //         addToCartHandler: (data: any) => dispatch({type: ADD_TO_CART,data: data})
  //  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

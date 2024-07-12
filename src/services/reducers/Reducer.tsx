import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
  cartData: [],
};
export default function cartItem(state = [], action: any) {
  // console.log("action",action)
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];
    case REMOVE_TO_CART:
      state.pop();
      return [...state];
    default:
      return state;
  }
}

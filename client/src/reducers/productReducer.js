import { GET_PRODUCTS, ADD_PRODUCT,  REMOVE_PRODUCT } from '../actions/types';

const initialState = {
  products: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      }
    default:
      return state;
  }
}

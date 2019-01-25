import { GET_PRODUCTS, ADD_PRODUCT,  REMOVE_PRODUCT, EDIT_PRODUCT } from '../actions/types';

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
        products: [action.payload, ...state.products].filter(product => product != undefined)
      }
    case EDIT_PRODUCT:
      console.log(state.products);
      console.log(action.payload);
      return {
        ...state,
        products: state.products.map((product) => product._id === action.payload._id ? action.payload : product)
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

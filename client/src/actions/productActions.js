import { GET_PRODUCTS, ADD_PRODUCT,  REMOVE_PRODUCT} from './types';

export const getProducts = () => dispatch => {
  fetch('/products/getProducts')
  .then(res => res.json())
  .then(res => {
    console.log(res.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  }
  );
};

export const addProduct = productData => dispatch => {
  console.log("Adding the following product")
  console.log(productData)
  fetch('/products/addProduct', {  // sending data url
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(productData)
  })
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    );
};


export const removeProduct = productData => dispatch => {
  console.log(productData);
  fetch(`/products/remove/${productData}`, {  // sending data url
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: REMOVE_PRODUCT,
        payload: res.data._id
      })
    );
};

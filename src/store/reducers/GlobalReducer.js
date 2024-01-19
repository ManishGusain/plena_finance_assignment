import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: {},
  favourites: {},
  cartTotalItems: 0,
  cartTotalAmount: 0
};

export const globalSlice = createSlice({
  name: 'global_slice',
  initialState,
  reducers: {
    products_list: (state, action) => {
      state.products = action.payload;
    },
    add_to_cart: (state, action) => {
      const { id, title, price, thumbnail } = action.payload;
      let temp_obj = {
        id: id,
        p_name: title,
        price,
        thumbnail,
        quantity: 1
      }


      if (id in state.cart) {
        state.cart[id].quantity += 1;
      } else {
        state.cart = { ...state.cart, [id]: temp_obj };
      }
    },
    remove_from_cart: (state, action) => {
      const { id } = action.payload;

      if (id in state.cart) {
        if (state.cart[id].quantity === 0) {
          delete state.cart[id];
        }
        else {
          state.cart[id].quantity -= 1;
        }
      }
    },
    add_to_favourites: (state, action) => {
      const itemId = action.payload.id;

      if (itemId in state.favourites) {
        delete state.favourites[itemId];
      } else {
        state.favourites = { ...state.favourites, [itemId]: action.payload };
      }
      console.log(state.favourites)
    },
    total_cart_items: (state, action) => {
      state.cartTotalItems = Object.keys(state.cart)?.length;
      console.log('total cart items count: ', Object.keys(state.cart)?.length)
    },
    total_cart_amount: (state, action) => {
      let totalPrice = Object.values(state.cart).reduce((sum, product) => {
        return sum + (product.price * product.quantity);
      }, 0);
      console.log('amount ', totalPrice)
      state.cartTotalAmount = totalPrice;
    },
  },
});

export const {
  products_list,
  add_to_cart,
  remove_from_cart,
  add_to_favourites,
  total_cart_items,
  total_cart_amount
} = globalSlice.actions;

export default globalSlice.reducer;

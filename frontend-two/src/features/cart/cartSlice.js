import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalCost: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const productAlreadyInCart = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );

      //check if the product has already been added to the cartitems
      if (productAlreadyInCart !== undefined) {
        return;
      }
      state.cartItems = [action.payload, ...state.cartItems];

      //calculate the total cost of all the the items in the cart
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;

      //caculating ends here
    },

    increaseProductQty: (state, action) => {
      const updateProducts = state.cartItems.map((item) => {
        if (item.product_id === action.payload) {
          item.product_quantity += 1;
        }
        return item;
      });

      state.cartItems = updateProducts;
      //calculate the total cost of all the the items in the cart
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;

      //caculating ends here
    },
    decreaseProductQty: (state, action) => {
      const updateProducts = state.cartItems.map((item) => {
        if (item.product_id === action.payload && item.product_quantity > 1) {
          item.product_quantity -= 1;
        }
        return item;
      });
      state.cartItems = updateProducts;
      //calculate the total cost of all the the items in the cart
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;

      //caculating ends here
    },
    deleteCartItem: (state, action) => {
      const updatedProducts = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
      //calculate the total cost of all the the items in the cart
      let tempTotal = 0;
      state.cartItems.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;
      state.cartItems = updatedProducts;
      //caculating ends here
    },
  },
});

export const {
  addItemToCart,
  increaseProductQty,
  decreaseProductQty,
  deleteCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

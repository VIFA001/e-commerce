import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerDetails: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
    cartItems: {
      type: Array,
      required: true,
    },
    reference: {
      trxref: String,
      status: String,
      message: String,
      redirecturl: String,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("orders", orderSchema);

export { OrderModel };

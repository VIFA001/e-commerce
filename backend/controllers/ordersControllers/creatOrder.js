import { OrderModel } from "../../models/ordersModel/Order.js";
import validator from "validator";

async function createNewOrder(req, res) {
  const { customerDetails, totalCost, cartItems, reference } = req.body;

  //check if customer provided a name
  if (validator.isEmpty(customerDetails.name)) {
    return res.status(400).json({ message: "please provide customer name" });
  }

  // check if customer provided a vaild email address

  if (validator.isEmail(customerDetails.email) == false) {
    return res.status(400).json({ message: "please provide a vaild email" });
  }
  //check if customer address is provided
  if (validator.isEmpty(customerDetails.address)) {
    return res.status(400).json({ message: "please provide your address" });
  }

  //check if total cost is present
  if (totalCost < 0) {
    return res.status(400).json({ message: "please provide order cost" });
  }
  //check if ITEMS WERE ORDERD
  if (cartItems.length === 0) {
    return res.status(400).json({ message: "please items must be ordered" });
  }

  //check if payment reference is present
  if (validator.isEmpty(reference.trxref)) {
    return res.status(400).json({ message: "Transcation refrence is needed" });
  }
  try {
    const order = await OrderModel.create({
      customerDetails: customerDetails,
      totalCost: totalCost,
      reference: reference,
      cartItems: cartItems,
    });
    res.status(201).json({ message: "order successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { createNewOrder };

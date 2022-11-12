import { model, Schema } from "mongoose";

const Seller = model(
  "Seller",
  new Schema({
    name: String,
    email: String,
    totalCommission: Number,
  })
);

const Sale = model(
  "Sale",
  new Schema({
    zone: String,
    date: String,
    saleValue: Number,
  })
);

export { Seller, Sale };

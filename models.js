import { model, Schema } from "mongoose";

const Seller = model(
  "Seller",
  new Schema({
    idSeller: Number,
    name: String,
    email: String,
    totalCommission: Number,
    sales: [
      {
        type: Schema.Types.ObjectId,
        ref: "Sale",
      },
    ],
  })
);

const Sale = model(
  "Sale",
  new Schema({
    idSeller: Number,
    zone: String,
    date: String,
    saleValue: Number,
  })
);

export { Seller, Sale };

import { Schema, model } from "mongoose";
import { VendorTypes } from "../src/types";

const vendorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
}, {
  timestamps: true,
})

const vendorModel = model<VendorTypes>('Vendor', vendorSchema);

export default vendorModel;
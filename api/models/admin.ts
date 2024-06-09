import { Schema, model } from "mongoose";
import type { AdminTypes } from "../src/types";

const AdminSchema = new Schema({
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
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
})

const adminModel = model<AdminTypes>("Admin", AdminSchema);

export default adminModel;
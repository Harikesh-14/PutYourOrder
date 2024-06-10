import { Router, Response, Request } from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import vendorModel from "../../models/vendor";

dotenv.config();
const router = Router();
const salt = bcrypt.genSaltSync(10)
const secret = process.env.SECRET_KEY as string

router.use(cookieParser());

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const isExistingVendor = await vendorModel.findOne({ email })

  if (!isExistingVendor) {
    return res.status(400).json({ message: "Vendor does not exist" });
  }

  const isPasswordMatch = bcrypt.compareSync(password, isExistingVendor.password)
  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const tokenPayload = {
    id: isExistingVendor._id,
    firstName: isExistingVendor.firstName,
    lastName: isExistingVendor.lastName,
    email: isExistingVendor.email,
    gender: isExistingVendor.gender,
    phoneNumber: isExistingVendor.phoneNumber,
    message: "Vendor logged in successfully"
  }

  try {
    const token = jwt.sign(tokenPayload, secret, {})
    res.cookie("token", token, { httpOnly: true, secure: true}).json(tokenPayload)
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
})

export default router;
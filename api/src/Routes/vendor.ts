import { Router, Response, Request } from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";
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

router.get('/profile', async (req: Request, res: Response) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, (err, decode) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.json(decode);
  })
})

router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "Vendor logged out successfully" });
})

router.get("/checkVendorLoginAuth", (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(200).json({ authenticated: false });
  }

  jwt.verify(token, secret, {}, (err, decoded) => {
    if (err) {
      return res.status(200).json({ authenticated: false });
    }
    res.status(200).json({ authenticated: true, user: decoded });
  });
})

export default router;
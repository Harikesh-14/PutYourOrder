import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminModel from "../../models/admin";

dotenv.config();
const router = Router();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET_KEY as string;

router.use(cookieParser());

router.post("/register", async (req: Request, res: Response) => {
  const { firstName, lastName, gender, email, phoneNumber, password } = req.body;

  try {
    const existingUser = await adminModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);
    const newAdmin = await adminModel.create({
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
      password: hashedPassword,
    })

    res.status(201).json({
      message: "Admin registered successfully",
      data: newAdmin,
    })
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body

  const isExistingUser = await adminModel.findOne({ email });

  if (!isExistingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const passOk = bcrypt.compareSync(password, isExistingUser.password);

  if (!passOk) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const tokenPayload = {
    id: isExistingUser._id,
    firstName: isExistingUser.firstName,
    lastName: isExistingUser.lastName,
    gender: isExistingUser.gender,
    email: isExistingUser.email,
    phoneNumber: isExistingUser.phoneNumber,
    message: "Admin logged in successfully",
  }

  try {
    const token = jwt.sign(tokenPayload, secret, {})
    res.cookie("token", token, { httpOnly: true, secure: true }).json(tokenPayload);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

export default router;
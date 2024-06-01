import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminModel from "../../models/admin";

dotenv.config();
const router = Router();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET as string;

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

export default router;
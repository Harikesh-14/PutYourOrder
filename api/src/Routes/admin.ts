import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs"
import jwt, { JwtPayload } from "jsonwebtoken"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminModel from "../../models/admin";

dotenv.config();
const router = Router();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET_KEY as string;

router.use(cookieParser());

interface AdminJwtPayload extends JwtPayload {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
}

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

router.get("/profile", (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }


  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(info)
  })
})

router.post("/logout", async (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "Logged out" });
});

router.put("/update", async (req: Request, res: Response) => {
  const { token } = req.cookies;
  const { firstName, lastName, gender, email, phoneNumber } = req.body;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (typeof decoded !== 'string') {
      const updateFields: any = {};
      if (firstName) updateFields.firstName = firstName;
      if (lastName) updateFields.lastName = lastName;
      if (gender) updateFields.gender = gender;
      if (email) updateFields.email = email;
      if (phoneNumber) updateFields.phoneNumber = phoneNumber;

      try {
        const updatedAdmin = await adminModel.findByIdAndUpdate(
          (decoded as AdminJwtPayload).id,
          updateFields,
          { new: true }
        );

        res.json(updatedAdmin);
      } catch (err) {
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  });
});

export default router;
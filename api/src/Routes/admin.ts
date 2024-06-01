import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const router = Router();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET as string;

router.use(cookieParser());

router.get("/login", (req: Request, res: Response) => {
    res.send("Admin Login");
})

export default router;
import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs"
import jwt, { JwtPayload } from "jsonwebtoken"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import adminModel from "../../models/admin";
import vendorModel from "../../models/vendor";

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

router.get("/auth-status", (req: Request, res: Response) => {
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
});


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

router.put("/update-firstName", async (req: Request, res: Response) => {
  const { firstName } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const info = decoded as JwtPayload;
      const updatedAdmin = await adminModel.findByIdAndUpdate(info.id, { firstName }, { new: true });

      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }

      return res.status(200).json({ message: 'First name updated successfully', updatedAdmin });
    } catch (updateError) {
      console.error('Database update error:', updateError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.put("/update-lastName", async (req: Request, res: Response) => {
  const { lastName } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const info = decoded as JwtPayload;
      const updatedAdmin = await adminModel.findByIdAndUpdate(info.id, { lastName }, { new: true });

      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }

      return res.status(200).json({ message: 'Last name updated successfully', updatedAdmin });
    } catch (updateError) {
      console.error('Database update error:', updateError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.put("/update-gender", async (req: Request, res: Response) => {
  const { gender } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const info = decoded as JwtPayload;
      const updatedAdmin = await adminModel.findByIdAndUpdate(info.id, { gender }, { new: true });

      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }

      return res.status(200).json({ message: 'Last name updated successfully', updatedAdmin });
    } catch (updateError) {
      console.error('Database update error:', updateError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.put("/update-email", async (req: Request, res: Response) => {
  const { email } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const info = decoded as JwtPayload;
      const updatedAdmin = await adminModel.findByIdAndUpdate(info.id, { email }, { new: true });

      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }

      return res.status(200).json({ message: 'Email updated successfully', updatedAdmin });
    } catch (updateError) {
      console.error('Database update error:', updateError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.put("/update-phoneNumber", async (req: Request, res: Response) => {
  const { phoneNumber } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const info = decoded as JwtPayload;
      const updatedAdmin = await adminModel.findByIdAndUpdate(info.id, { phoneNumber }, { new: true });

      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }

      return res.status(200).json({ message: 'Phone number updated successfully', updatedAdmin });
    } catch (updateError) {
      console.error('Database update error:', updateError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.post("/add-vendor", async (req: Request, res: Response) => {
  const { firstName, lastName, gender, email, phoneNumber, password } = req.body;

  try{
    const existingVendor = await vendorModel.findOne({ email })

    if (existingVendor) {
      return res.status(400).json({ message: "Vendor already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt); 

    const newVendor = await vendorModel.create({
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
      password: hashedPassword,
    })

    res.status(201).json({
      message: "Vendor registered successfully",
      data: newVendor,
    })
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

router.get("/view-vendors", async (req: Request, res: Response) => {
  try {
    const vendors = await vendorModel.find()
    res.status(200).json(vendors)
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

router.delete("/delete-vendor/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedVendor = await vendorModel.findByIdAndDelete(id);

    if (!deletedVendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

export default router;
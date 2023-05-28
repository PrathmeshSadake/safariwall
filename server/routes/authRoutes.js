import bcrypt from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();
router.post("/register", async function (req, res) {
  const saltRounds = 10;
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          const userDoc = await User.create({ name, email, password: hash });
          const token = jwt.sign(
            {
              email: userDoc.email,
              id: userDoc._id,
            },
            process.env.JWT_SECRET
          );
          userDoc.password = undefined;
          res.status(200).json({ user: userDoc, token });
        });
      });
    } else {
      res.status(500).json({ error: "User already exists" });
    }
  } catch (error) {
    res.send("error: " + error);
  }
});

router.post("/login", async function (req, res) {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  console.log(userDoc);
  if (userDoc) {
    const validPassword = bcrypt.compareSync(password, userDoc.password);
    if (validPassword) {
      const token = jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        process.env.JWT_SECRET
      );
      userDoc.password = undefined;
      res.json({ user: userDoc, token });
    } else {
      res.status(422).json({ error: "Invalid credentials" });
    }
  } else {
    res.json({ error: "Invalid credentials" });
  }
});

router.get("/profile", requireAuth, async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;

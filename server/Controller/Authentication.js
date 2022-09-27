import User from '../Models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.status(409).json({ message: 'Email Already Registered' });
    } else {
      const newpassword = await bcrypt.hash(req.body.password, 10);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: newpassword,
      });
      res.status(201).json({ message: 'Created' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    console.log(user);
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
    } 
    const isUserValid = await bcrypt.compare(req.body.password, user.password);

    if (isUserValid) {
      const userDetails = { _id: user._id, name: user.name, email: user.email };
      req.session.user = userDetails;

      return res.status(200).json({ message: 'Success', user: user.name });
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


export const logout = (req, res) => {
    try {
      req.session.user = null;
      res.status(200).json({ message: 'success' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  

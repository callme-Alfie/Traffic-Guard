// src/routes/auth.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // 1. Check if user exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ msg: 'Email already in use' });
    }

    // 2. Hash password
    const hashed = await bcrypt.hash(password, 12);

    // 3. Create user
    const user = await prisma.user.create({
      data: { name, email, password: hashed, role },
    });

    // 4. Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 5. Return token & user
    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 2. Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4. Return token & user
    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

export default router;

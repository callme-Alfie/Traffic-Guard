// src/routes/incidents.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/incidents?search=&status=&severity=&from=&to=
router.get('/', async (req, res) => {
  const { search, status, severity, from, to } = req.query;
  const where = {};

  if (search) {
    where.OR = [
      { type:     { contains: search, mode: 'insensitive' } },
      { location: { contains: search, mode: 'insensitive' } }
    ];
  }
  if (status)   where.status   = status;
  if (severity) where.severity = severity;
  if (from || to) {
    where.timestamp = {};
    if (from) where.timestamp.gte = new Date(from);
    if (to)   where.timestamp.lte = new Date(to);
  }

  const incidents = await prisma.incident.findMany({
    where,
    orderBy: { timestamp: 'desc' }
  });
  res.json(incidents);
});

// POST /api/incidents
router.post('/', async (req, res) => {
  const { type, description, location, latitude, longitude, severity } = req.body;
  const incident = await prisma.incident.create({
    data: { type, description, location, latitude, longitude, severity }
  });
  res.status(201).json(incident);
});

// PATCH /api/incidents/:id  (e.g. update status or severity)
router.patch('/:id', async (req, res) => {
  try {
    // Validate ID
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid incident ID' });
    }

    // Only allow specific fields to be updated
    const { status, severity, description, location } = req.body;
    const data = {};
    if (status)      data.status      = status;
    if (severity)    data.severity    = severity;
    if (description !== undefined) data.description = description;
    if (location    !== undefined) data.location    = location;

    const incident = await prisma.incident.update({
      where: { id },
      data
    });

    return res.json(incident);
  } catch (err) {
    console.error('Error in PATCH /api/incidents/:id →', err);
    return res.status(500).json({ error: 'Could not update incident' });
  }
});

// DELETE /api/incidents/:id
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid incident ID' });
  }
  await prisma.incident.delete({ where: { id } });
  res.status(204).end();
});

export default router;

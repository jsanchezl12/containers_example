const express = require('express');
const jwt = require('jsonwebtoken');
const Note = require('../models/Note');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'secret_key'; // Cambia esto por una clave más segura en producción

// Middleware para autenticar el token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Crear una nota
router.post('/', authenticateToken, async (req, res) => {
  const { content } = req.body;

  try {
    const note = await Note.create({
      userId: req.user.userId,
      content,
    });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la nota' });
  }
});

// Obtener notas del usuario
router.get('/', authenticateToken, async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { userId: req.user.userId } });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las notas' });
  }
});

module.exports = router;

// server.js - Backend de base pour Freelance Manager
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware de base
app.use(cors());
app.use(express.json());

// Route de test pour vérifier que tout marche
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '✅ Backend fonctionne parfaitement !', 
    timestamp: new Date().toLocaleString('fr-FR'),
    user: 'Asmaa' // Ton nom pour personnaliser :)
  });
});

// Route pour le dashboard (on l'ajoutera plus tard)
app.get('/api/dashboard', (req, res) => {
  res.json({
    hoursThisMonth: 0,
    totalRevenue: 0,
    activeProjects: 0,
    pendingInvoices: 0
  });
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur Freelance Manager démarré sur http://localhost:${PORT}`);
  console.log(`📡 Test API : http://localhost:${PORT}/api/test`);
});
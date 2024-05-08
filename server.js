require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const upload = require('./middlewares/imageUpload');

const app = express();

// Activer CORS pour toutes les requêtes
app.use(cors());
app.options('*', cors()); // Activer CORS pour les requêtes de type pre-flight

app.use(express.json()); // Middleware pour parser le JSON

// Routes pour l'authentification
app.use('/api/auth', authRoutes);

app.use('/uploads', express.static('uploads'));
// Routes pour les produits
app.use('/api/products', productsRoutes);


app.post( (req, res) => {
  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).json({
      message: 'File uploaded successfully',
      filename: req.file.filename,
      url: fileUrl
    });
  });


// Connexion à MongoDB
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

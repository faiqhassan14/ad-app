require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
const adRoutes = require('./routes/ads');

const app = express();


app.use(cors({
  origin: function (origin, callback) {
    const allowed = ['http://localhost:5173', 'http://localhost:5174'];
    if (!origin || allowed.includes(origin)) callback(null, true);
    else callback(new Error('CORS not allowed'));
  },
  credentials: true,
}));

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);


app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


app.get('/', (req, res) => {
  res.json({ message: 'Server running fine!' });
});

const PORT = process.env.PORT || 5000;
(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Server error:', err);
  }
})();

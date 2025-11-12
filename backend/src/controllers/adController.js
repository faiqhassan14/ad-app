const { Ad } = require('../models');
const path = require('path');
const ai = require('../utils/ai'); // placeholder

exports.createAd = async (req, res) => {
  try {
    const { category, subCategory, title, description, price } = req.body;
    const mediaUrl = req.file ? `/uploads/${req.file.filename}` : null;
    // call AI to generate description/hashtags (simulate)
    const generatedDescription = await ai.generateDescription(title, description);
    const ad = await Ad.create({ category, subCategory, title, description, price, mediaUrl, generatedDescription, UserId: req.user.id });
    // TODO: send to social media via webhooks (simulate)
    res.json(ad);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listAds = async (req, res) => {
  const ads = await Ad.findAll({ order: [['createdAt', 'DESC']]});
  res.json(ads);
};

const express = require('express');
const router = express.Router();
const adCtrl = require('../controllers/adController');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');

router.get('/', adCtrl.listAds);
router.post('/', auth, upload.single('media'), adCtrl.createAd);

module.exports = router;

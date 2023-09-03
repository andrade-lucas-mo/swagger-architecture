const express = require('express');
const router = express.Router();
const bandController = require('../controllers/band-controller');

router.post('/create', bandController.createBand)
router.get('/:id', bandController.getBandById)

module.exports = router;
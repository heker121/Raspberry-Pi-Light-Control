var express = require('express');
var router = express.Router();

const control = require('../controllers/control');

router.get('/', control.home);
router.get('/bonsai', control.bonsai);
router.post('/on', control.on);
router.post('/off', control.off);

module.exports = router;

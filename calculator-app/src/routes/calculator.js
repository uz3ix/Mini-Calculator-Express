const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.post('/calculate', calculatorController.calculate);
router.get('/add', calculatorController.add);
router.get('/subtract', calculatorController.subtract);
router.get('/multiply', calculatorController.multiply);
router.get('/divide', calculatorController.divide);
router.get('/power', calculatorController.power);
router.get('/sqrt', calculatorController.sqrt);
module.exports = router;
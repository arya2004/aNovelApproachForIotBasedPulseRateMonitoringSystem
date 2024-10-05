const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { isLoggedin } = require('../middleware/authMiddleware');
const connectLiveReload = require("connect-livereload");

router.get('/:id', connectLiveReload(), patientController.showPatientDashboard);
router.post('/new', patientController.createPatient);

module.exports = router;

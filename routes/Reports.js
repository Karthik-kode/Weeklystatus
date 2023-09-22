var express = require('express');
var router = express.Router();
const ReportHandler = require("../models/controllers/Reports")


router.post('/create', ReportHandler.createReport)
router.get('/:name', ReportHandler.fetchReport)



module.exports = router;
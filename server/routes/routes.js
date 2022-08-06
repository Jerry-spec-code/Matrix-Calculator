const express = require('express');
const router = express.Router();

const controller = require("../controller/default.controller");

router.post('/cofactor', (req, res) => {
    res.send(controller.getCofactor(req.body));
})
router.post('/determinant', (req, res) => {
    res.send(controller.getDeterminant(req.body));
})
router.post('/inverse', (req, res) => {
    res.send(controller.getInverse(req.body));
})
router.post('/multiplyMatrices', (req, res) => {
    res.send(controller.multiplyMatrices(req.body[0], req.body[1]));
})
router.post('/numberTheory', (req, res) => {
    res.send(controller.numberTheory(req.body[0]));
})
router.post('/solveEquations', (req, res) => {
    res.send(controller.solveEquations(req.body[0], req.body[1]));
})
router.post('/transpose', (req, res) => {
    res.send(controller.getTranspose(req.body));
})

module.exports = router; 
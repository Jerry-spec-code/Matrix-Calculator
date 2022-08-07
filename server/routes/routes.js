const express = require('express');
const router = express.Router();

const controller = require("../controller/default.controller");
const error = require("../middleware/error");

router.post('/cofactor', (req, res) => {
    const next = () => controller.getCofactor(req.body)
    res.send(error.validMatrix(req, next));
})
router.post('/determinant', (req, res) => {
    const next = () => [`The determinant is ${controller.getDeterminant(req.body)}`];
    res.send(error.validMatrix(req, next));
})
router.post('/inverse', (req, res) => {
    const next = () => controller.getInverse(req.body);
    res.send(error.validMatrix(req, next));
})
router.post('/multiplyMatrices', (req, res) => {
    const complete = () => controller.multiplyMatrices(req.body[0], req.body[1]);
    const next = () => error.validMatrix({body : req.body[1]}, complete)
    res.send(error.validMatrix({body : req.body[0]}, next));
})
router.post('/numberTheory', (req, res) => {
    const next = () => controller.numberTheory(req.body[0]);
    res.send(error.validInteger(req, next));
})
router.post('/solveEquations', (req, res) => {
    const next = () => controller.parseEquations(req.body);
    res.send(error.validMatrix(req, next));
})
router.post('/transpose', (req, res) => {
    const next = () => controller.getTranspose(req.body);
    res.send(error.validMatrix(req, next));
})

module.exports = router; 
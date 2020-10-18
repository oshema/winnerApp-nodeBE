const express = require('express');
const { getBets, getBet, createBet, updateBet, deleteBet } = require('../controller/bets.js')
const { protect, authorize } = require('../middleware/auth')

const router = express.Router();

router.route('/')
    .get(getBets)
    .post(protect, authorize('admin'), createBet);

router.route('/:id')
    .get(getBet)
    .put(protect, authorize('admin'), updateBet)
    .delete(protect, authorize('admin'), deleteBet);

module.exports = router;
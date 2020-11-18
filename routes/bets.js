const express = require('express');
const { getBets, getBet, createBet, updateBet, deleteBet } = require('../controller/bets.js')
const { protect, authorize } = require('../middleware/auth')

const router = express.Router();

router.get('/', getBets)

router.post('/:matchId', protect, createBet);

router.route('/:id')
    .get(getBet)
    .put(protect, updateBet)
    .delete(protect, deleteBet);

module.exports = router;
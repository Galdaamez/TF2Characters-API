const { Router} = require('express');
const router = Router();

const offensive = require('../database/offensive.json')

router.get('/', (req, res) => {
    res.json({
        response: {
            "code": "200",
            "text": "OK"
        },
        data: offensive
    });
})

module.exports = router;
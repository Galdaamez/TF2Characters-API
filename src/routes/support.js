const {Router} = require('express');
const router = Router();

const support = require('../database/support.json')

router.get('/', (req, res)=>{
    res.json({
        response:{
            "code": "200",
            "text": "OK"
        },
        data : support
    });
})

module.exports = router;
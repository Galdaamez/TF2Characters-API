const {Router} = require('express');
const router = Router();

const deffensive = require('../database/deffensive.json')

router.get('/', (req, res)=>{
    res.json({
        response:{
            "code": "200",
            "text": "OK"
        },
        data : deffensive
    });
})

module.exports = router;
const {
    Router
} = require('express');
const router = Router();

router.get('/offensive', (req, res) => {
    res.download('./src/database/offensive.json', 'TF2-Offensive_Classes.json', (err) => {
        if (err) {
            return console.log('Error Searching The File.');
            res.send('Error')
        }
    });
})

router.get('/deffensive', (req, res) => {
    res.download('./src/database/deffensive.json', 'TF2-Deffensive_Classes.json', (err) => {
        if (err) return res.end();

    })
})

router.get('/support', (req, res) => {
    res.download('./src/database/support.json', 'TF2-Support_Classes.json', (err) => {
        if (err) return res.send('Err')
    })
})

module.exports = router;
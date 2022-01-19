const router = require('express').Router();


//create....

router.post('/info', (req, res) => {
    const { name } = req.body;
    console.log(name);
})





module.exports = router;
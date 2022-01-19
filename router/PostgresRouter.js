const router = require('express').Router();
const pool = require('../db/postgresdb');

//create....

router.post('/info', async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name);
        const query = `INSERT INTO test_postgres (name) VALUES(?);`;
        pool.query(query, [name], (err, result) => {
            if (err) throw err;
            res.status(201).json({ success: 'Data Inserted😄' })
        })
    } catch (error) {
        console.log(error);
    }

})





module.exports = router;
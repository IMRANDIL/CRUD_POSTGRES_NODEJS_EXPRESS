const router = require('express').Router();
const pool = require('../db/postgresdb');

//create....

router.post('/info', async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name);
        const Query = `INSERT INTO test_postgres(name) VALUES($1);`;
        pool.query(Query, [name], (err, result) => {
            if (err) throw err;
            res.status(201).json({ success: result })
        })
    } catch (error) {
        console.log(error);
    }

});


//show data...

router.get('/info/get', async (req, res) => {
    try {
        const query = `SELECT * FROM test_postgres;`;
        pool.query(query, (err, result) => {
            if (err) throw err;
            res.status(200).json(result.rows);
        })
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;
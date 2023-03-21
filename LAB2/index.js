const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
});

app.get('/', async (req, res) => {
    // const { rows } = await pool.query("SELECT NOW()");
    // res.send(`Hello World! The current time is ${rows[0].now}.`);
    const { rows } = await pool.query("SELECT NOW()");
    const now = new Date();
    now.setHours(now.getHours() - 5);
    const currentTime = now.toLocaleString(); // convert the UTC time to local time
    res.send(`Hello World! The current time is ${currentTime}.`);

});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

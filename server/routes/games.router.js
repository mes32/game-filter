const axios = require('axios');
const express = require('express');
const router = express.Router();
const GIANT_BOMB_URL = 'https://www.giantbomb.com/api/games/';
const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {

    const filter = `name:${req.query.name}`;
    axios({
        method: 'GET',
        url: GIANT_BOMB_URL,
        params: {
            format: 'json',
            api_key: API_KEY,
            filter: filter,
            sort: 'name:asc',
            limit: 20
        }
    }).then((response) => {
        res.send(response.data.results);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

module.exports = router;
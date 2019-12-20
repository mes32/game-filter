const axios = require('axios');
const express = require('express');
const router = express.Router();

const BASE_URL = 'https://www.giantbomb.com/api/games/';
const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {
    const filter = `name:${req.query.name}`;
    // NOTE: Searching names that include a period only seems to work
    // when the filter=name: is included in the url field but not when 
    // it is under the params field.  
    axios({
        method: 'GET',
        url: `${BASE_URL}?filter=${filter}`,
        params: {
            format: 'json',
            api_key: API_KEY,
            sort: 'name:asc',
            limit: 100
        }
    }).then((response) => {
        res.send(response.data.results);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

module.exports = router;
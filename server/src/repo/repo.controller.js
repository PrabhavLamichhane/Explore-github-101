const axios = require('axios');

async function list(req, res, next) {
    let query = {};

    if (req.query.query)
        query.q = req.query.query;

    if (req.query.page)
        query.page = req.query.page;

    if (req.query.per_page)
        query.per_page = req.query.per_page;

    if (req.query.sort)
        query.sort = req.query.sort;

    try {
        let response = await axios.get('https://api.github.com/search/repositories', {
            params: query
        });
        return res.send(response.data);

    } catch (error) {
        if (error.response) console.error(error.response.data)
    }
}

module.exports = {
    list
};
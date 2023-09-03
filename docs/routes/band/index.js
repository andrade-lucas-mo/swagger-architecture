const create = require('./create');
const get = require('./get');

module.exports = {
    '/band/{id}' : {
        ...get
    },
    '/band/create' : {
        ...create
    }
}
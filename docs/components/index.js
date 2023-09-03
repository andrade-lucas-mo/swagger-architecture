const band = require('./band');

module.exports = {
    components: {
        schemas: {
            ...band,
            Error: {
                type: "object",
                properties: {
                    status: {
                        type: "number"
                    },
                    message: {
                        type: "string"
                    }
                }
            }
        }
    }
}
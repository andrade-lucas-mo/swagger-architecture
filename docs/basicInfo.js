module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Swagger architecture",
        description: "A study about swagger documentation and architecture",
        contact: {
            name: "Andrade Lucas"
        },
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "LocalHost running in your own computer"
        }
    ],
    tags: [
        "Band"
    ]
}
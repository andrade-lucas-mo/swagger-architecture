module.exports = {
    BandCreateBody: {
        type: "object",
        properties: {
            name: {
                type: "string"
            }
        }
    },
    BandSuccessResponse: {
        type: "object",
        properties: {
            status: {
                type: "number",
                description: "http status",
                example: 200
            },
            message: {
                type: "string",
                description: "information message",
                example: "success"
            },
            data: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "band identifier",
                        example: 11
                    },
                    name: {
                        type: "string",
                        description: "band name",
                        example: "Alabanda"
                    },
                    createdSince: {
                        type: "string",
                        description: "date when the band was created on the system",
                        example: "DD/MM/YYYY"
                    },
                    endedIn: {
                        type: "string",
                        description: "date when the band was finished",
                        example: "DD/MM/YYYY"
                    }
                }
            }
        }
    },
    BandInternalServerErrorResponse: {
        type: "object",
        properties: {
            status: {
                type: "number",
                description: "http status",
                example: 500
            },
            message: {
                type: "string",
                description: "information message",
                example: "Internal server error"
            },
            data: {
                type: "string",
                description: "information data",
                example: null
            }
        }
    }
}
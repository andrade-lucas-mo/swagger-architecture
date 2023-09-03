module.exports = {
    get: {
        summary: "Get band data by id",
        tags: ["Band"],
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                examples: {
                    "get band by id": {
                        "value": 11
                    }
                }
            }
        ],
        responses: {
            500: {
                description: "Internal server error",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/BandInternalServerErrorResponse"
                        }
                    }
                }
            },
            200: {
                description: "Get a specific band data based on id",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/BandSuccessResponse"
                        }
                    }
                }
            }
        }
    }
}
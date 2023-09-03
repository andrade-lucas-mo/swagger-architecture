module.exports = {
    post: {
        summary: "Create a new band",
        tags: ["Band"],
        requestBody: {
            content: {
                "application/json":{
                    schema: {
                        $ref: "#/components/schemas/BandCreateBody"
                    },
                    examples: {
                        "create band": {
                            value: {
                                name: "Cool Band Name"
                            }
                        }
                    }
                }
            }
        },
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
            201: {
                description: "Band created successfully",
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
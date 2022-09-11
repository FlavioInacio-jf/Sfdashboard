export const authDoc = {
  "/auth/login": {
    post: {
      tags: ["auth"],
      summary: "Create a new session",
      description: "Create a new session",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  description: "This e-mail will be used for login",
                  type: "string",
                  required: true,
                },
                password: {
                  description: "This password will be used for login",
                  type: "string",
                  required: true,
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Login successfully performed",
        },
        "401": {
          description: "Error performing authentication",
        },
      },
    },
  },
  "/auth/logout": {
    post: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["auth"],
      summary: "Logout of account",
      description:
        "Logout of account. It's necessary to place the refresh token in the request header.",
      responses: {
        "201": {
          description: "Logout successfully performed",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
      },
    },
  },
  "/auth/refresh-token": {
    security: [
      {
        bearer: [],
      },
    ],
    post: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["auth"],
      summary: "Create a new access token and refresh token",
      description:
        "Create a new access token and refresh token. It's necessary to place the refresh token in the request header.",
      responses: {
        "201": {
          description: "Refresh token criado com sucesso!",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
      },
    },
  },
};

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
                  unique: true,
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
          description: "Email and/or password incorrect.",
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
          description: "Refresh token invalid",
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
          description: "Refresh token created successfully!",
        },
        "401": {
          description: "Refresh token invalid! or Refresh token expired!",
        },
      },
    },
  },
};

export const clientsDoc = {
  "/clients": {
    post: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["clients"],
      summary: "Add a new client",
      description: "Add a new client",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  description: "Client name",
                  type: "string",
                  required: true,
                },
                email: {
                  description: "This e-mail will be used for login",
                  type: "string",
                  required: false,
                },
                cpf: {
                  description: "CPF",
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
          description: "Client registered successfully",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "409": {
          description: "There is already a customer with this CPF registered",
        },
      },
    },
    get: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["clients"],
      summary: "Get all clients",
      description: "List all clients",
      responses: {
        "200": {
          description: "Success",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
      },
    },
  },
  "/clients/{id}": {
    get: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["clients"],
      summary: "Get a single client by ID",
      description: "Get a single client by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      responses: {
        "200": {
          description: "Success",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Client not found",
        },
      },
    },
    delete: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["clients"],
      summary: "Delete client by ID",
      description: "Delete client by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      responses: {
        "201": {
          description: "Client successfully removed",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Client not found",
        },
      },
    },
    patch: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["clients"],
      summary: "Update a client by ID",
      description: "Update a client by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  description: "Client name",
                  type: "string",
                  required: false,
                },
                email: {
                  description: "This e-mail will be used for login",
                  type: "string",
                  required: false,
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Client successfully updated",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Client not found",
        },
      },
    },
  },
};

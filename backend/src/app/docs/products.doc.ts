export const productsDoc = {
  "/products": {
    post: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Create a new product",
      description: "Create a new product",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: {
                  description: "Product title",
                  type: "string",
                  required: true,
                  unique: true,
                },
                description: {
                  description: "Product description",
                  type: "string",
                  required: true,
                },
                price: {
                  description: "Product price",
                  type: "number",
                  required: true,
                },
                amount: {
                  description: "Product amount",
                  type: "number",
                  required: true,
                },
                photo: {
                  description: "Product url photo",
                  type: "string",
                  required: true,
                },
                category: {
                  description: "Product category",
                  type: "string",
                  required: false,
                },
                physical_condition: {
                  description: "Product physical condition",
                  type: "string",
                  enum: ["old", "new"],
                  required: true,
                },
                status: {
                  description: "Product status",
                  type: "string",
                  enum: ["published", "draft", "out_of_stock"],
                  required: true,
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Product created successfully",
        },
        "401": {
          description: "Token invalid, Token expired or Unauthorized",
        },
        "409": {
          description: "Product already exists",
        },
      },
    },
    get: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Get all products",
      description: "List all products",
      responses: {
        "200": {
          description: "Success",
        },
        "401": {
          description: "Token invalid, Token expired or Unauthorized",
        },
      },
    },
  },
  "/products/{id}": {
    get: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Get a single product by ID",
      description: "Get a single product by ID",
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
          description: "Token invalid, Token expired or Unauthorized",
        },
        "404": {
          description: "Product doesn't exist!",
        },
      },
    },
    delete: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Delete a product by ID",
      description: "Delete a product by ID",
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
          description: "Product removed successfully!",
        },
        "401": {
          description: "Token invalid, Token expired or Unauthorized",
        },
        "404": {
          description: "Product doesn't exist!",
        },
      },
    },
    patch: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Update a product by ID",
      description: "Update a product by ID",
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
                description: {
                  description: "Product description",
                  type: "string",
                  required: false,
                },
                price: {
                  description: "Product price",
                  type: "number",
                  required: false,
                },
                amount: {
                  description: "Product amount",
                  type: "number",
                  required: false,
                },
                photo: {
                  description: "Product url photo",
                  type: "string",
                  required: false,
                },
                category: {
                  description: "Product category",
                  type: "string",
                  required: false,
                },
                physical_condition: {
                  description: "Product physical condition",
                  type: "string",
                  enum: ["old", "new"],
                  required: false,
                },
                status: {
                  description: "Product status",
                  type: "string",
                  enum: ["published", "draft", "out_of_stock"],
                  required: false,
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Product updated successfully",
        },
        "401": {
          description: "Token invalid, Token expired or Unauthorized",
        },
        "404": {
          description: "Product doesn't exist!",
        },
      },
    },
  },
};

import { ProductStatusEnum } from "../modules/products/enums";

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
                  description: "Product name",
                  type: "string",
                  required: true,
                },
                bar_code: {
                  description: "Product code",
                  type: "string",
                  required: true,
                  unique: true,
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
                status: {
                  description: "Product status",
                  type: "string",
                  enum: Object.values(ProductStatusEnum),
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
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "409": {
          description:
            "A product has already been registered with this barcode",
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
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
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
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Product not found",
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
          description: "Product removed successfully",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Product not found",
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
                title: {
                  description: "Product name",
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
                status: {
                  description: "Product status",
                  type: "string",
                  enum: Object.values(ProductStatusEnum),
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
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Product doesn't exist!",
        },
      },
    },
  },
  "/products/{id}/sale": {
    post: {
      security: [
        {
          bearer: [],
        },
      ],
      tags: ["products"],
      summary: "Buy a product by id",
      description: "Buy a product by id",
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
          description: "The purchase of the product was successful",
        },
        "401": {
          description:
            "Token informed is invalid: Perform new authentication to acquire new token",
        },
        "404": {
          description: "Product not found",
        },
        "409": {
          description:
            "Product does not have enough stock for the requested quantity",
        },
      },
    },
  },
};

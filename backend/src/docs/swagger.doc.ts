import { authDoc, clientsDoc, productsDoc, usersDoc } from ".";

export const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Place Dream API",
    description: "APIREST Place Dream",
    version: "1.0.0",
    contact: {
      email: "jflavioinacio22@gmail.com",
    },
    license: {
      name: "MIT License",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  components: {
    securitySchemes: {
      bearer: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  security: {
    bearer: [],
  },
  paths: {
    ...authDoc,
    ...usersDoc,
    ...clientsDoc,
    ...productsDoc,
  },
};

FROM node:16-bullseye-slim@sha256:8265ac132f720998222008355e11535caf53d6bccecbb562a055605138975b4e

WORKDIR /usr/src/app

COPY --chown=node:node package.json package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn add sharp

COPY --chown=node:node . .

ENV NEXT_TELEMETRY_DISABLED 1

USER node

EXPOSE 3000
CMD ["yarn", "dev"]
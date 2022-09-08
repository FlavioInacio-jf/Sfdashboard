FROM node@sha256:18ae6567b623f8c1caada3fefcc8746f8e84ad5c832abd909e129f6b13df25b4

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn add sharp

COPY ./ ./

COPY . ./

RUN yarn build

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000
CMD [ "yarn", "start" ]

FROM node:lts-buster@sha256:6155ff062c403e99c1da7c317710c5c838c1e060f526d98baea6ee921ca61729

WORKDIR /usr/src/app
COPY --chown=node:node package.json ./

RUN npm install
RUN npm install sqlite3 --save

COPY --chown=node:node . .

USER node

EXPOSE 3333
CMD ["npm", "run", "dev"]
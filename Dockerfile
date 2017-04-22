FROM node:6.10-alpine

ARG yarnMode

ENV HOME=/home/app
WORKDIR $HOME

COPY . $HOME

RUN yarn $yarnMode --frozen-lockfile --link-duplicates --offline

ENV NODE_ENV development
EXPOSE 8008
USER node

CMD [ "npm", "run", "serve" ]

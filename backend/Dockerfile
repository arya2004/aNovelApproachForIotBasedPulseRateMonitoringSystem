FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN apk add --update --no-cache python3 python3-dev build-base && \
  npm ci

FROM node:18-alpine AS run

COPY --from=build --chown=1001:1001 /app /app
WORKDIR /app
RUN mkdir /.npm && chown 1001:1001 /.npm
USER 1001:1001

CMD node app.js

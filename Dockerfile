FROM node:16 AS builder
RUN npm install -g yarn --force
COPY . .
RUN yarn install
RUN yarn deploy
FROM nginx:alpine
COPY --from=builder ./build/ /usr/share/nginx/html/
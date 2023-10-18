FROM node:18.18-alpine3.18 AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build

FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html
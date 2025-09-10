FROM node:24-alpine as base
WORKDIR /app
COPY package*.json ./

FROM base as development
COPY . .
RUN npm install
EXPOSE ${CLIENT_PORT:-3000}
CMD ["npm", "run", "dev"]

FROM base as builder
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE ${CLIENT_PORT:-3000}
CMD ["nginx", "-g", "daemon off;"]

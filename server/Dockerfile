FROM node:24-alpine as base
WORKDIR /app
COPY package*.json ./

FROM base as development
COPY . .
RUN npm install
EXPOSE ${SERVER_PORT:-5000}
CMD ["npm", "run", "dev"]

FROM base as builder
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
EXPOSE ${SERVER_PORT:-5000}
CMD ["npm", "start"]

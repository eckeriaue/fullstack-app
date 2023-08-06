FROM node:18.15.0-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:18.15.0-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5050
CMD ["npm", "run", "start:prod"]
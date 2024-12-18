FROM node:18
WORKDIR /app
COPY package*.json ./
COPY . .
ARG PORT
ENV PORT=$PORT
CMD ["node", "app.js"]
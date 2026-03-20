FROM node:20-alpine

WORKDIR /app

# copiar solo backend
COPY backend/package*.json ./
RUN npm install

# copiar código backend
COPY backend .

EXPOSE 8080

CMD ["node", "src/index.js"]
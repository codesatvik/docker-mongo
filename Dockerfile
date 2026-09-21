FROM node:24.11.1

WORKDIR /app

COPY . .
RUN npm install

CMD ["node", "index.ts"]

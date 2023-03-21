FROM node:16.17.1-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
CMD ["npm", "start"]
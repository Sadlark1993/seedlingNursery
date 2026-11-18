FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV CI=true
ENV FAST_REFRESH=false
EXPOSE 3000
CMD ["npm", "start"]

FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]
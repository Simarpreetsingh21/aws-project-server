FROM  node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start","--","--host","0.0.0.0"]
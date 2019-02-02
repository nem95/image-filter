FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN apt-get update && apt-get install nano \
  && export TERM=xterm \
  && npm install && npm install -g nodemon
COPY . /usr/app/
EXPOSE 8080
CMD [ “npm”, “start” ]

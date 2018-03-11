FROM node:carbon

RUN mkdir /usr/src/app
RUN git clone https://github.com/cuappdev/clicker-backend.git /usr/src/app

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "prod" ]

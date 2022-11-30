FROM cypress/browsers

RUN mkdir /app

WORKDIR /app

COPY ./package.json .
COPY ./cypress.config.js .

RUN npm install

COPY ./cypress ./cypress

ENTRYPOINT ["npx","cypress","run"]

CMD [""]

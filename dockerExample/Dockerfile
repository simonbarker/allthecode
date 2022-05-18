FROM node:16.15.0

WORKDIR /var/www/

COPY . .

RUN npm install
RUN chown -R node:node .

USER node

CMD [ "node", "index.js" ]
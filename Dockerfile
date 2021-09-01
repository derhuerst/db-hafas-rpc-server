FROM node:16.8.0-alpine3.13

WORKDIR /app
ADD . /app

RUN npm install --production

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

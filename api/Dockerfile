FROM node:20-alpine

COPY . .

EXPOSE 3001

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

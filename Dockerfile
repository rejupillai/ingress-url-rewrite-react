FROM node:alpine
WORKDIR /react-app
ENV PATH /react-app/node_modules/.bin:$PATH
COPY /react-app/package.json ./
COPY /react-app/package-lock.json ./
RUN npm i
COPY ./react-app ./
EXPOSE 80
CMD ["npm", "start"]
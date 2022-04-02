#############
### Build ###
#############

# base image
FROM node:lts as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# Add app
RUN npm ci
COPY . .

RUN npm run build

FROM node:lts-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# install and cache app dependencies
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci --production

COPY . .

COPY --from=build /app/dist ./dist

EXPOSE 3000
ENTRYPOINT ["node", "dist/main"]
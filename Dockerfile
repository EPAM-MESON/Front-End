# Stage 1
# Build docker image of react app
FROM node:15.12.0 as build-stage

# set working directory
RUN mkdir /usr/app
#copy all files from current directory to docker
COPY . /usr/app

WORKDIR /usr/app

RUN npm install

COPY . /usr/app

CMD [ "npm", "run", "dev" ]
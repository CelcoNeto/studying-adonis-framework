FROM node:13.12.0

LABEL maintainer="Celco Neto <celcoroxa@gmail.com>"

# ------------------------------------------
# change the work directory
# ------------------------------------------
WORKDIR /var/www

# ------------------------------------------
# install the adonis CLI
# ------------------------------------------
RUN npm i -g @adonisjs/cli

# ------------------------------------------
# copy source project
# ------------------------------------------
COPY . .

# ------------------------------------------
# install dependencies
# ------------------------------------------
RUN npm install

# ------------------------------------------
# expose application port
# ------------------------------------------
EXPOSE 3333

COPY .docker/node/start.sh .

RUN ls

# ------------------------------------------
# start application
# ------------------------------------------
RUN ./start.sh


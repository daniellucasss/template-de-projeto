#!/bin/bash

CONTAINER_NAME=template-aceleradora-db
POSTGRES_PASSWORD=123456
POSTGRES_USER=postgres
DATABASE=template-aceleradora

case $1 in
  run-deprecated)
    docker run --rm --name ${CONTAINER_NAME} -p 5432:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -d ${POSTGRES_USER}
  ;;
  run) #
    mkdir -p ~/.pgsql/${CONTAINER_NAME}; docker run \
      --name ${CONTAINER_NAME} \
      --volume ~/.pgsql/${CONTAINER_NAME}:/var/lib/postgresql/data \
      --publish 5432:5432 \
      --env POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
      --detach \
      ${POSTGRES_USER};
  ;;

  create)
    docker exec -it ${CONTAINER_NAME} psql -U ${POSTGRES_USER} -c "CREATE DATABASE ${DATABASE}"
  ;;

  console)
    docker exec -it ${CONTAINER_NAME} psql -U ${POSTGRES_USER} -d ${POSTGRES_PASSWORD}
  ;;

  *)
    echo "Opcoes: "
    echo -e "\t - run-deprecated: Inicia container com volume de dados volatil (dados sao perdidos quando o container para)"
    echo -e "\t - run: Inicia container com volume de dados persistente"
    echo -e "\t - create: Cria banco de dados dentro do container"
    echo -e "\t - console: Abre cliente postgres conectado ao container"
  ;;
esac

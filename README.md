<h1 align="center">
  Semana OmniStack 10
</h1>
<h2 align="center">
    <img alt="DevRadar" title="DevRadar" src="./devradar.svg" width="250px" />
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/cleiver/OmniStack10-DevRadar">

  <img alt="Requires Docker" src="https://img.shields.io/badge/requires-Docker-blue">


  <img alt="License" src="https://img.shields.io/github/license/cleiver/OmniStack10-DevRadar">
</p>

## Projeto

O DevRadar é um projeto que visa conectar desenvolvedores próximos a você que trabalham com as mesmas tecnologias.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## Ambiente de Desenvolvimento

Por praticidade, mantenho instalado os binários das linguagens que desenvolvo na minha prória máquina. Mas os serviços que venho a utilizar utilizo imagens Docker para não poluir meu notebook com diversas versões e sistemas diferentes.

### Banco de dados

Para esse projeto utilizei a imagem oficial do Mongo disponível no [Docker Hub](https://hub.docker.com/_/mongo).

```
docker run --name mongosrv -v /var/dev/mongo:/data/db -p 27017:27017 -d mongo
```

### Back-end

O back-end da aplicação está disponivel na pasta **backend**. Para iniciar o sistema basta executar os seguintes comandos dentro da pasta:

```
node src/index.js
```

ou

```
yarn run dev
```
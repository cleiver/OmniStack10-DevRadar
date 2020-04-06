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

## Project

DevRadar is a project that aims to connect developers near you that work with the same technologies.

## Technologies

This project was developed using:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## Screenshots

## Development Environment

To make things easier and cleaner, I keep my program languages installed locally but the services I need I use with Docker.

### Database

For this project I used the official Mongo release available at [Docker Hub](https://hub.docker.com/_/mongo).

```
docker run --name mongosrv -v /var/dev/mongo:/data/db -p 27017:27017 -d mongo
```

### Back-end

The back-end application is avaialable at, well, the backend folder.

```
node src/index.js
```

or

```
yarn run dev
```
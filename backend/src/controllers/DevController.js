const axios = require('axios')

const parseStringAsArray = require('../utils/parseStringAsArray')
const { findConnections, sendMessage } = require('../websocket')

const Dev = require('../models/Dev')

//------------------------------------------------------------------------------

/**
 * Boa prática diz que o controller deve ter no máximo 5 funções:
 * - index
 * - store
 * - show
 * - update
 * - destroy
 */

module.exports = {
  async store(request, response) {
    // Os outros dados virão do Github
    const { github_username, techs, latitude, longitude } = request.body

    // Verifica se já existe antes de buscar no Github
    let dev = await Dev.findOne({ github_username })

    // @TODO: atualizar os dados caso já exista o cadastro?
    if (!dev) {
      // As techs vem como strings separadas por virgula
      const techsArray = parseStringAsArray(techs)

      // Mongo diferentão, salva longitude, latitudo (ao contrário do resto do mundo)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)

      const { name = login, avatar_url, bio } = githubResponse.data

      dev = await Dev.create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      })

      // verifica se alguma conexao websocket esta pesquisando por esse dev
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )

      sendMessage(sendSocketMessageTo, 'new-dev', dev)
    }

    return response.json(dev)
  },

  async index(request, response) {
    const devs = await Dev.find()

    return response.json(devs)
  },
}
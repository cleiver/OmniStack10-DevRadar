const parseStringAsArray = require('../utils/parseStringAsArray')

const Dev = require('../models/Dev')

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query

    const techsArray = parseStringAsArray(techs)

    /**
     * Retorna os devs que trabalham com alguma das tecnologias pesquisadas
     * em um raio de 10km (informado em metros no filtro)
     */
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    })

    return response.json({ devs })
  },
}
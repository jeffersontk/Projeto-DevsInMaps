const { Router } = require('express')

const DevController = require('./controllers/DevController.js')
const SearchController = require('./controllers/SearchController.js')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)
module.exports = routes


//Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:
//Query params: request.query (filtros, ordenação, paginação...)
//Route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (Dados para criação ou alteração de um registro)

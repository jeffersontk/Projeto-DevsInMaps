const { Router } = require('express')

const routes = Router()

routes.post('/', (request, response) => {
    return response.json({ message: 'hello world' })
})

module.exports = routes


//Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:
//Query params: request.query (filtros, ordenação, paginação...)
//Route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (Dados para criação ou alteração de um registro)

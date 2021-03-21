module.exports = (error, request, response, next) => {
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'id used is malformed' })
  } else if (error.name === 'ValidationError') {
    response.status(409).send({
      error: error.message
    })
  } else {
    response.status(500).end()
  }
}

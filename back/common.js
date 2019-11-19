const { pool } = require('./pool')

const RESOLVED = 2;
const BLOCKED = 3;

const getStates = (req, response) => {
  pool.query("SELECT id, title FROM state", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTypes = (req, response) => {
  pool.query("SELECT id, title FROM type", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getStates,
  getTypes
}

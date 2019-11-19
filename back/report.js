const { pool } = require('./pool')

const getReports = (request, response) => {

  var state = parseInt(request.query.state)
  if (!state) {
    state = -1
  }
  var type = parseInt(request.query.type)
  if (!type) {
    type = -1
  }

  pool.query("SELECT id, state, type, message FROM report WHERE state = $1 AND type = $2 ORDER BY created_at DESC", [state, type], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const blockContent = (request, response) => {
  const { id, user } = req.body

  // update report to state of Blocked and set is_visible to FALSE for specefic entry
  pool.query('WITH content_update AS (UPDATE content SET is_visible = FALSE WHERE id = $1 RETURNING id) UPDATE report SET state = 3, fk_user = $2 WHERE fk_content IN (SELECT id FROM content_update)', [id, user], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const resolveReport = (request, response) => {
  const { id, user } = req.body

  const id = parseInt(request.params.id)

  pool.query('', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getReports,
  updateReport,
  blockContent
}

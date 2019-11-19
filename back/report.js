const { pool } = require('./pool')

const RESOLVED = 2;
const BLOCKED = 3;

const getReports = (req, response) => {

  var state = parseInt(req.query.state)
  if (!state) {
    state = -1
  }
  var type = parseInt(req.query.type)
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

const blockContent = (req, response) => {
//  const { user } = req.body
  const id = parseInt(req.params.id)
  // update report to state of Blocked and set is_visible to FALSE for specefic entry
    pool.query('WITH content_update AS (UPDATE report SET state = $2 WHERE id = $1 RETURNING fk_content) UPDATE content SET is_visible = FALSE WHERE id IN (SELECT fk_content FROM content_update)', [id, BLOCKED], (error, results) => {

    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const resolveReport = (req, response) => {
//  const { user } = req.body
  const id = parseInt(req.params.id)

//  pool.query('UPDATE report SET state = $1, fk_user = $2 WHERE id = $3', [RESOLVED, user, id], (error, results) => {
  pool.query('UPDATE report SET state = $1 WHERE id = $2', [RESOLVED, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getReports,
  resolveReport,
  blockContent
}

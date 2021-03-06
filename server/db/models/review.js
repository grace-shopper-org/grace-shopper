const Sequelize = require('sequelize')
const db = require('../db')

const review = db.define('review', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = review

const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    // Pode usar também o Express.json()
    app.use(bodyParser.json())
    app.use(cors())
}
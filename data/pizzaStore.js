const Sequelize = require('sequlize')

const database = 'testdb'
const host = 'test-app-db.cjhemveytjwp.us-east-2.rds.amazonaws.com'
const username = 'postgres'
const password = 'postgres'

const pgClient = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: 'postgres',
    }
)

const Pizza = pgClient.define('pizza', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    toppings: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.BIGINT
    }
})


Pizza.sync().then(() => {
    console.log('postgres connection ready')
})


module.exports = Pizza
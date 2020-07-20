const {Pool} = require('pg') //configura conexão entre app e BD para não precisar autenticar toda vez que fizer uma query

module.exports = new Pool({
    user: 'postgres',
    password: 'postgres',
    host:'localhost',
    port: 5432,
    database: 'my_teacher'
})
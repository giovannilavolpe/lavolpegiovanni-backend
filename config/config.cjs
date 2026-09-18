// import { configDotenv } from 'dotenv'
// import { Pool } from 'pg'
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// configDotenv()
console.log(process.env.DB_TEST_DATABASE)



// export const pool = new Pool({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database_name,
// })

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres',
    logging: false
  }
};


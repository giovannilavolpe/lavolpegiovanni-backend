import { pool } from './db.js'

export async function getCharacters() {
    try {
        const res = await pool.query('SELECT * FROM character')
        console.log(res.rows)

        return res
    } catch (error) {
        console.error(error.message)
    }
}
showCharacters();

export async function getAltername() {
    try {
        const res = await pool.query('SELECT * FROM altername')
        console.log(res.rows)
        return res
    } catch (error) {
        console.error(error.message)
    }
}

showAltername()
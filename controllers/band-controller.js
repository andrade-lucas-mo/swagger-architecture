const mysql = require('../middleware/mysql');
const date = require('date-and-time')

exports.createBand = async (req, res, next) => {
    try {

        const query = 'INSERT INTO band (band.name) VALUES (?);';
        const params = [req.body.name]
        const result = await mysql.execute(query, params)
        const insertedData = await getBandById (result.insertId)
        const data = insertedData[0];
        const response = {
            status: 201,
            message: "band created",
            data : {
                id: data.id_band,
                name: data.name,
                createdSince: date.format(data.dt_init,'DD/MM/YYYY')
            }
        };
        return res.status(201).send(response);
    } catch (error) {
        error.status = 500;
        next(error)
    }
}

exports.getBandById = async (req, res, next) => {
    try {
        const result = await getBandById (req.params.id)
        const data = result[0];
        const response = {
            status : 200, 
            message : "success", 
            data : {
                id: data.id_band,
                name: data.name,
                createdSince: date.format(data.dt_init,'DD/MM/YYYY'),
                endedIn: data.dt_end ? date.format(data.dt_end,'DD/MM/YYYY') : null
            }
        };
        return res.status(200).send(response);
    } catch (error) {
        error.status = 500;
        next(error)
    }
}

async function getBandById (id) {
    const query = 'SELECT * FROM band WHERE id_band = ?';
    const params = [id];
    return await mysql.execute(query, params);
}
const connection = require('../Model/dbconnect')

const admincategory_view = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM  tbl_admin_category'
        await connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.status(200).json({
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

const admincategoryPost =  (req, res) => {
    try {
        const data = req.body;
        const sqlQuery = 'INSERT INTO  tbl_admin_category SET ?'
        connection.query(sqlQuery, data, (err, result) => {
            // console.log(data)
            if (err) {
               res.json(err)
            }
            else{
                res.json(result)

            }
        }
        )
       
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}
const admincategory_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE  tbl_admin_category SET ? WHERE pcategoryid =?"
        connection.query(SqlQuery, [data, id], (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })

    } catch (error) {

    }
}
const findcategory = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM  tbl_admin_category where categoryname = ?`
        await connectDb.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.status(200).json({
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

module.exports = {admincategory_view ,admincategoryPost, admincategory_update,  findcategory }
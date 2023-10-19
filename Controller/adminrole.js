const connection = require('../Model/dbconnect')

const adminrole_view = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM tbl_admin_roles'
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

const adminrolePost =  (req, res) => {
    try {
        const data = req.body;
        const sqlQuery = 'INSERT INTO tbl_admin_roles SET ?'
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
const adminrole_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_roles SET ? WHERE roleid =?"
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

module.exports = {adminrole_view ,adminrolePost, adminrole_update}
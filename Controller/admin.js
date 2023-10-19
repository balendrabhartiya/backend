const connection = require('../Model/dbconnect.js');
const bcrypt = require('bcrypt')

///////////////////////////////////////////////////GET///////////////////////////////////////////////////////////////////// 
const getData = (req, res) => {
    try {
        let sqlQuery = "SELECT * FROM  tbl_adminusers"
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
            }
            else {
                res.json(result);
            }
        })
    }
    catch (error) {
        res.send(error.sqlMassage)
    }
};




//////////////////////////////////////////////////////POST/////////////////////////////////////////////////////////// 
const postData = (req, res) => {
    try {
        const userData = req.body;
        const sqlQuery = "INSERT INTO tbl_adminusers SET ?";
        connection.query(sqlQuery, userData, (err, result) => {
            if (err) {
                console.log(err.sqlMessage)
            }
            else {
                res.json(result)
            }
        })
    }
    catch (error) {
        res.send("Error")
    }
};
//////////////////////////////////////////////////CREATE////////////////////////////////////////////////////////////////
const create = (req, res) => {
    console.log(req.body)
    const sql = "INSERT INTO  tbl_adminusers (`id`,`name`,`email`,`aadhar` ,`qualification`,`address`, `mobile`, `photo`, `dob`, `doj`, `state`, `city`,  `pin`, `status`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        console.log(hash)
        if (err) return res.json({ Error: "Error in hashing password" });
        // console.log(password)
        const values = [
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.pin,
            req.body.mobile,
            req.body.photo,
            req.body.aadhar,
            req.body.doj,
            req.body.qualification,
            req.body.dob,
            req.body.address,
            req.body.state,
            req.body.city,
            req.body.status,
            hash,
        ]
        connection.query(sql, [values], (err, result) => {
            if (err) return res.json(err);
            return res.json({ Status: "Success" });
        })
    })
};

////////////////////////////////////////////////////PUT///////////////////////////////////////////////////////////////////
const putData = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_adminusers SET ? WHERE id = ?"
        connection.query(SqlQuery, [data, id], (err, result) => {
            if (err) {
                console.log(err.sqlMessage)
            }
            else {
                res.json(result)
            }
        })

    } catch (error) {

    }
};

//////////////////////////////////////////////// STATUS////////////////////////////////////////////////////////////
const activestatus = ((req, res) => {
    let id =req.query.id
    let data = req.query.status
    let sqlQuery = "UPDATE  tbl_adminusers set status=? where id=?";

    connection.query(sqlQuery, [data, id], function (error, result) {
        if (error) {
            console.log("Error ", error.sqlMessage)
        }
        else {
            res.json(result)
        }
    })


})


// const deactivestatus = ((req, res) => {

//     let eid = req.params.id
//     let sqlQuery = `UPDATE  tbl_adminusers set status=? where id=?`

//     conn.query(sqlQuery, eid, function (error, result) {
//         if (error) {
//             console.log("Error ", error.sqlMessage)
//         }
//         else {
//             res.json(result)
//         }
//     })

// })

//////////////////////////////////////////// DELETE//////////////////////////////////////////////////
// const deleteData = (req, res) => {

//     const sql = "Delete FROM  tbl_adminusers WHERE uid = ?";
//     const id = req.params.id;
//     console.log(id)
//     connection.query(sql, id, (err, result) => {

//         console.log(err)
//         if (err) return res.json({ Error: "delete employee error in sql" });
//         return res.json({ Status: "Success" })
//     })
// }

const deleteData = (req, res) => {

    const sql = "Delete FROM  tbl_adminusers WHERE id = ?";
    const id = req.params.id;
    console.log(id)
    connection.query(sql, id, function (err, result) {
        if (err) {
            console.log("error", err.sqlMessage)
        }
        else {
            res.json(result)
        }
    })
}

module.exports = { getData, postData, putData, deleteData, create, activestatus,  };
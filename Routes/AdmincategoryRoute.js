const express = require('express')
const admincategory_route = express.Router()

const { admincategory_view,  admincategoryPost, admincategory_update, findcategory} = require('../Controller/Admin_category')

admincategory_route.get('/admincategory_view', admincategory_view)
admincategory_route.post('/admincategoryPost', admincategoryPost)
admincategory_route.put('/admincategory_update/:pcategoryid', admincategory_update)
admincategory_route.get('/findcategory/: categoryname', findcategory)

module.exports = admincategory_route
 
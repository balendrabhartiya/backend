const express = require('express')
const roleassignRoute = express.Router()

const { roleassignView, adminrolePost } = require('../Controller/Roleassign')

roleassignRoute.get('/roleassignView', roleassignView)
roleassignRoute.post('/adminrolePost', adminrolePost)


module.exports = roleassignRoute
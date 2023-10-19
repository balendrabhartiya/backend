const express = require("express");   

const adminRoute = express.Router();   //Router is a Method of express for routing

//swagger //
 /**
 * @swagger
 * components:
 *   schemas:
 *      tbl_adminusers:
 *          type: object
 *          properties:
 *             id:
 *               type: number
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: number
 *             mobile:
 *               type: string
 *             photo:
 *               type: string
 *             aadhar:
 *               type: number
 *             doj:
 *               type: string
 *             qualification:
 *               type: number
 *             dob:
 *               type: number
 *             address:
 *               type: string
 *             state:
 *               type: string
 *             city:
 *               type: number
 *             pin:
 *               type: string
 *             status:
 *               type: string
 */


/**
 * @swagger
 * /getdata:
 *   get:
 *     summary: Get data
 *     description: Get method to retrieve data
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/tbl_adminusers'
 */

/**
 * @swagger
 * /postdata:
 *   post:
 *     summary: Add a new data
 *     description: Add new data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tbl_adminusers'
 *     responses:
 *       200:
 *         description:  added successfully
 */

/**
 * @swagger 
 * /putdata/{id}:
 *   put:
 *     summary: Update data
 *     description: Update data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tbl_adminusers'
 *     responses:
 *       200:
 *         description: Data updated successfully
 */

/**
 * @swagger 
 * /deleteData/{id}:
 *   delete:
 *     summary: Delete data
 *     description: Delete data by id
 *     parameters:
 *       - in: path
 *         name: uid
 *         description:  ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data deleted successfully
 */

// const admin_validation = require('../Validation/admin');    // import from validation

const { getData, postData, putData, deleteData, create, activestatus,  } = require('../Controller/admin.js');

adminRoute.get('/getdata', getData);
adminRoute.post('/postdata', postData);
// AdminRoute.post('/postdata', admin_validation, postData);   // jab vaidate use karenge tab
adminRoute.put('/putdata/:id', putData);
adminRoute.delete('/deleteData/:id', deleteData);
adminRoute.post('/create', create);
adminRoute.put('/activestatus', activestatus);
// adminRoute.put('/deactivestatus', deactivestatus)
module.exports = adminRoute;

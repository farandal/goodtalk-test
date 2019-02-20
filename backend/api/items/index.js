/**
 * Good Talk - Test - Backend
 * Items Router
 * This file contains the mapping between the routes in the api
 * and the logic in the controller
 * Author: Francisco Aranda <farandal@gmail.com>
 */

/*
 resources:
 -https://www.oodlestechnologies.com/blogs/Integrate-Swagger-in-your-NodeJS-Application
 */

import { Router } from 'express';
import { insert, index, show, update, destroy } from './controller';
import { middleware as query } from 'querymen';
import { middleware as body } from 'bodymen';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();
const router = new Router();

/**
 * @swagger
 * /items:
 *   post:
 *     description: Returns Items
 *     tags:
 *      - Items
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description:  JSON object
 */

router.get('/', query(), index);

/**
 * @swagger
 * /items/insert:
 *   post:
 *     description: Create an Item
 *     tags:
 *      - Items
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description:  JSON object
 */
router.post('/insert', jsonParser, insert);

/**
 * @swagger
 * /items/{id}:
 *   post:
 *     description: Get a single Item
 *     tags:
 *      - Items
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description:  JSON object
 *     parameters:
 *      - name: id
 *        in: path
 *        description: ID of the event to be retrieved
 *        required: true
 */
router.get('/:id', show);
router.put('/:id', jsonParser, update);

/**
 * @swagger
 * /items/update/{id}:
 *   post:
 *     description: Updates an Item
 *     tags:
 *      - Items
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description:  JSON object
 *     parameters:
 *      - name: id
 *        in: path
 *        description: ID of the event to be updated
 *        required: true
 */
router.post('/update/:id', jsonParser, update);

/**
 * @swagger
 * /items/delete/{id}:
 *   post:
 *     description: Deletes an Item
 *     tags:
 *      - Items
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description:  JSON object
 *     parameters:
 *      - name: id
 *        in: path
 *        description: ID of the item to be deleted
 *        required: true
 */
router.delete('/:id', destroy);
router.post('/delete/:id', destroy);

export default router;

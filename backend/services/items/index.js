/**
 * @namespace ItemsService
 * @summary Contains the Items api calls
 * @author Francisco Aranda <farandal@gmail.com>
 */

/* resources: 
-https://developers.google.com/calendar/quickstart/nodejs
-https://www.diycode.cc/projects/google/google-api-nodejs-client
-https://github.com/wanasit/google-calendar/blob/master/example/list-example.js#L17
-https://github.com/gsuitedevs/node-samples/issues/6
 */

/**
 * @function getItemsList
 * @memberof ItemsService
 * @summary Promise that returns the items list
 * @return {Object} item JSON object
 */

import Item, { ItemSchema } from '../../models/Item';

export const getItemsList = () => {
  
  return new Promise((resolve, reject) => {
    
    Item.find().exec((err, items) => {
      if (err) {
        console.log(err);
        reject({
          code: 409,
          message: 'There was an error contacting the Items service',
          error: err
        });
        return;
      }

      resolve(items.map(item => item.view(false)));
    });

  });

};

/**
 * @function insertItem
 * @memberof ItemsService
 * @summary Promise that inserts an Item
 * @param {Object} resource Item resource
 * @return {Object} item Iserted Item JSON object
 */
export const insertItem = (resource) => {
 
  const object = {
    name: resource.name,
    description: resource.description
  };

  return new Promise((resolve, reject) => {
    
    const item = new Item(object);

    try {

      item.save((err, item) => {
        if (err) {
          reject({
            code: 409,
            message: 'There was an error creating the Item',
            error: error
          });
        }
        resolve(item);
      });

    } catch(error) {

      console.log(error);
      reject({
        code: 409,
        message: 'There was an error creating the Item',
        error: error
      });

    }

  });

};

/**
 * @function getItem
 * @memberof ItemsService
 * @summary Promise that returns a single Item
 * @param {String} itemId itemId
 * @return {Object} item JSON object
 */
export const getItem = (itemId) => { 

  return new Promise((resolve, reject) => { 

    Item.findById(itemId, (err, item) => {

      if (err) {
        console.log(err);
        reject({
          code: 409,
          message: 'There was an error contacting the Items service',
          error: err
        });
        return;
      }
      resolve(item.view(true));

    });

  });


};

/**
 * @function updateItem
 * @memberof ItemsService
 * @summary Promise that updates an item and returns the updated item
 * @param {String} itemId itemId
 * @param {Object} resource Item JSON object
 * @return {Object} Updated Item JSON object
 */
export const updateItem = ( itemId, resource) => {

  return new Promise((resolve, reject) => {
    
    Item.findById(itemId, (err, item) => {

      if (err || !item) {

        console.log(err);

        reject({
          code: 409,
          message: 'There was an error contacting the Items service',
          error: err
        });

        return;

      }

      console.log(item);

      if(resource && resource.name && resource.name != "") {
        item.name = resource.name;
      }
      
      if(resource && resource.description && resource.description != "") {
        item.description = resource.description;
      }
   
      item.save( (err, response) => { 
          resolve(response);
      });

    });

  });

};

/**
 * @function deleteItem
 * @memberof ItemsService
 * @summary Promise that detletes an Item
 * @param {String} itemId itemId
 * @return {Object} object with a message containing 'Resource has been deleted'
 */

export const deleteItem = (itemId) => {
 
  return new Promise((resolve, reject) => {
    
    Item.findByIdAndRemove(itemId, (err, response) => {

      if (err) {
        console.log(err);
        reject({
          code: 409,
          message: 'There was an error contacting the Items service',
          error: err
        });
        return;
      }
      resolve({
        message: 'Item has been deleted'
      });

    });

  });
};

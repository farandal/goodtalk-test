import { itemsConstants as C } from '../constants';
import { itemService } from '../services';

function getItems() {
  return dispatch => {
    itemService.getItems().then(
      response => {
        dispatch(_getItems(response));
      },
      error => {
        dispatch(_error(error));
      }
    );
  };
}

function createItem(item) {
  return dispatch => {
    itemService.createItem(item).then(
      response => {
        let item = response;
        item.id = response['_id'];
        dispatch(_createItem(response));
      },
      error => {
        dispatch(_error(error));
      }
    );
  };
}

function deleteItem(item) {
  return dispatch => {
    itemService.deleteItem(item.id).then(
      response => {
        dispatch(_deleteItem(item));
      },
      error => {
        dispatch(_error(error));
      }
    );
  };
}

function updateItem(item) {
  return dispatch => {
    itemService.updateItem(item).then(
      response => {
        dispatch(_updateItem(response));
      },
      error => {
        dispatch(_error(error));
      }
    );
  };
}

/* DISPATCHERS */

function _getItems(items) {
  return { type: C.GET_ITEMS, items: items };
}

function _createItem(item) {
  return { type: C.ADD_ITEM, item: item };
}

function _deleteItem(item) {
  return { type: C.DELETE_ITEM, item: item };
}

function _updateItem(item) {
  return { type: C.UPDATE_ITEM, item: item };
}

function _error(error) {
  /* NOT IMPLEMENTED */
  console.log(error);
  return;
}

/* PUBLIC METHODS EXPOSITION */

export const itemsActions = {
  createItem,
  deleteItem,
  updateItem,
  getItems
};

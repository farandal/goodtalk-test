import { itemsConstants as C } from '../constants';
import { itemService } from '../services';

function createItem(item) {
  return dispatch => {
    itemService.createItem(item).then(
      response => {
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

function _createItem(item) {
  return { type: C.ADD_ITEM, item: item.toString() };
}

function _deleteItem(item) {
  return { type: C.DELETE_ITEM, item: item.toString() };
}

function _updateItem(item) {
  return { type: C.UPDATE_ITEM, item: item.toString() };
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
  updateItem
};

import { API_URL } from '../app.config';

export const itemService = {
  getItem,
  updateItem,
  getItems,
  deleteItem,
  createItem
};

function _parsePayload(object) {
  //TODO: Validations here
  return {
    name: object.name,
    description: object.description
  };
}

function _parseResponse(response) {
  return {
    id: response.id,
    name: response && response.name ? response.name : '',
    description: response && response.description ? esponse.description : ''
  };
}

function createItem(item) {
  const parsedItem = _parsePayload(item);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parsedItem)
  };

  return fetch(`${API_URL}/items/insert`, requestOptions)
    .then(handleResponse)
    .then(res => {
      console.log('Created Item from API, logs:', res);
      return res;
    });
}

function updateItem(item) {
  const parsedItem = _parsePayload(item);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(parsedItem)
  };

  return fetch(`${API_URL}/items/update/${item.id}`, requestOptions)
    .then(handleResponse)
    .then(res => {
      console.log('Updated Item from API, logs:', res);
      return res;
    });
}

function deleteItem(id) {
  const requestOptions = {
    method: 'POST'
  };
  return fetch(`${API_URL}/items/delete/${id}`, requestOptions)
    .then(handleResponse)
    .then(res => {
      console.log('Deleted Item from API:', res);
      return res;
    });
}

function getItems() {
  const requestOptions = {
    method: 'POST'
  };
  return fetch(`${API_URL}/items`, requestOptions)
    .then(handleResponse)
    .then(data => {
      console.log('data', data);
      return data;
    });
}

function getItem(id) {
  const requestOptions = {
    method: 'POST'
  };
  return fetch(`${API_URL}/items/${id}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      console.log('data', data);
      return data;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    data = _parseResponse(data);

    if (!response.ok) {
      console.log('-Response is not ok');
      if (response.status === 401) {
        console.log('-Response status 401');
      }
      if (response.status === 409) {
        console.log('-Response status 409');
      }
      const error =
        (data && data.error ? data.error : 'DEFAULT_ERROR') ||
        response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

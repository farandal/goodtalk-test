/**
 * @namespace ItemsController
 * @summary Items Controller
 * @author Francisco Aranda <farandal@gmail.com>
 */

import {
  success,
  notFound,
  error,
  handleServiceError
} from '../../services/response/';

import {
  getItemsList,
  insertItem,
  getItem,
  updateItem,
  deleteItem
} from '../../services/items';

export const index = (
  { querymen: { query, select, cursor } },
  res,
  next
) =>
  getItemsList()
    .then(events => res.json(events))
    .catch(error => handleServiceError(res, error));

export const insert = ({ body }, res, next) =>
  insertItem(body)
    .then(item => res.json(item))
    .catch(error => handleServiceError(res, error));

export const show = ({ params }, res, next) =>
  getItem(params.id)
    .then(item => res.json(item))
    .catch(error => handleServiceError(res, error));

export const update = ({  params, body }, res, next) =>
  updateItem(params.id, body)
    .then(item => res.json(item))
    .catch(error => handleServiceError(res, error));

export const destroy = ({  params }, res, next) =>
  deleteItem(params.id)
    .then(response => res.json(response))
    .catch(error => handleServiceError(res, error));
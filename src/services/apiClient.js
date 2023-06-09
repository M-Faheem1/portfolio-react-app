import axios from 'axios';

export const performGetRequest = (url) => {
  return axios.get(url);
};

export const performPostRequest = (url, payload) => {
  return axios.post(url, payload);
};

export const performPutRequest = (url, payload) => {
  return axios.put(url, payload);
};

export const performPatchRequest = (url, payload) => {
  return axios.patch(url, payload);
};

export const performDeleteRequest = (url) => {
  return axios.delete(url);
};

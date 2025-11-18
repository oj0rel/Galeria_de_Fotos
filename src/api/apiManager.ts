import axios from "axios";

export const PlaceHolderApiManager = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const MyJsonApiManager = axios.create({
  baseURL: 'https://my-json-server.typicode.com/oj0rel/fotosapi',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
});

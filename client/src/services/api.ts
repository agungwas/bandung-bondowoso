import axios from 'axios';
import {Store} from "@reduxjs/toolkit";
console.log(process.env.REACT_APP_API_BASE_URL + '/api', 'ini dari sini')

export const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL + '/api' });

export const setupClients = (store: Store) => {
    api.interceptors.request.use(
        (config: any) => {
            /*const {auth: {authToken}} = store.getState();
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }*/
            return config;
        },
        err => Promise.reject(err)
    );

    // Response interceptor for API calls
    api.interceptors.response.use(
      response => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        const status = error.response.status;
        const data = error.response.data;
        console.log('==== Interceptors Error Response ====', error.response);

        return Promise.reject(error);
      }
    );
}

export enum Method {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface ApiResponse<T = undefined> {
  statusCode: number
  message: string
  data: T
}
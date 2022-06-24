import axios, { AxiosResponse } from 'axios';
import {Store} from "@reduxjs/toolkit";
import toastify from 'helpers/toastify';
console.log(process.env.REACT_APP_API_BASE_URL + '/api', 'ini dari sini')

export const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL + '/api' });

export const setupClients = (store: Store) => {
    // Request interceptor for API calls
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
      response => response,
      async function ({ response: error }: { response: ErrorResponse }) {
        const status = error.status;
        const message = error.data.message;
        // console.log('==== Interceptors Error Response ====', error);

        if (status > 399) {
          Array.isArray(message) 
            ? message.forEach((el: string) => toastify.error(el))
            : toastify.error(message) 
        }

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

export interface ErrorResponse<T = undefined> extends AxiosResponse<ApiResponse<T>> {
  data: ApiResponse<T>
}
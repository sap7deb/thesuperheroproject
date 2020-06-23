import axios from 'axios';
import * as https from 'https';
import * as assert from 'assert';
import * as HttpStatus from 'http-status-code';
import * as fs from 'fs';
import * as FormData from 'form-data';
import axiosErrorLogger from './AxiosErrorLogger';

export class HttpClient {
  axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  async post(requestBody: any, url: string, headers?: object): Promise<any> {

    try {
      const response = await this.axiosInstance.post(url, requestBody, {headers});
      return response;
    } catch (error) {
      axiosErrorLogger.log(error);
      throw error;
    }
  }


  async get(url: string, header?: object, params?: object): Promise<any> {
    try {
      const response = await this.axiosInstance.get(url, { headers: header, params });
      return response;
    } catch (error) {
      axiosErrorLogger.log(error);
      return error;
    }
  }

  async head(url: string, headers?: object): Promise<any> {
    try {
      const response = await this.axiosInstance.head(url, {headers});
      return response;
    } catch (error) {
      axiosErrorLogger.log(error);
      return error;
    }
  }

}
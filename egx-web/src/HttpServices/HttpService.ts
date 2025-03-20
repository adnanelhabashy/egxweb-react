// src/services/HttpService.ts
import "reflect-metadata";
import { injectable } from "inversify";
import axios, { AxiosInstance } from "axios";
import { IHttpService } from "./IHttpService";

/**
 * The HttpService sets up an Axios instance with interceptors
 * that attach Basic Auth credentials (username/password) to every request.
 */
@injectable()
export class HttpService implements IHttpService {
  private axiosClient: AxiosInstance;

  constructor() {
    // Create an Axios instance
    this.axiosClient = axios.create({
      baseURL: "http://127.0.0.1:7379", // base URL for Webdis
    });

    // Add an interceptor to attach Basic Auth for every request
    this.axiosClient.interceptors.request.use((config) => {
      // Provide your username and password
      const username = "admin";
      const password = "123456";

      // Basic Auth header => "Authorization: Basic base64(username:password)"
      const token = btoa(`${username}:${password}`);

      config.headers = {
        ...config.headers,
        Authorization: `Basic ${token}`,
      };

      return config;
    });

    // (Optional) Response interceptors for error handling or logging
    this.axiosClient.interceptors.response.use(
      (response) => response,
      (error) => {
        // handle or log error
        return Promise.reject(error);
      }
    );
  }

  /**
   * Calls HGETALL on the given Redis key.
   * e.g., GET /HGETALL/keyName
   */
  public async hgetAll(key: string): Promise<any> {
    // Webdis endpoint: /HGETALL/KEY
    const response = await this.axiosClient.get(`/HGETALL/${key}`);
    return response.data; // Webdis typically returns JSON
  }
}

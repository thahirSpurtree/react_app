import axios, { AxiosInstance } from 'axios';
import { ErrorResponse } from './ErrorResponse';


enum RequestType {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export type SuccessHandler<T> = (t: T) => void;
export type ErrorHandler = (error : ErrorResponse) => void;

class AxiosApiClient {
    private readonly BASE_URL = `${window.location.origin}/api/`;
    private readonly axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: this.BASE_URL
        })
    }
    private makeRequest<T, V>(
        uri: string,
        requestType: RequestType,
        success: SuccessHandler<T>,
        failure: ErrorHandler,
        body?: V
    ) {
        this.axios.request<T>({
        data: body,
        url: uri,
        headers: {
        //   Authorization: getIdToken()
        },
        params: requestType === RequestType.GET ? body : '',
        method: requestType
        })
        .then(response => {
            success(response.data);
        })
        .catch(error => {
            if (error && error.response) {
              if (error.response.status === 401) {
                // logoutUser();
              }
              failure(error.response.data);
            }
          });
    }

public makeGetRequest<T, V>(
    uri: string,
    success: SuccessHandler<T>,
    failure: ErrorHandler,
    params?: V
) {
    this.makeRequest(uri, RequestType.GET, success, failure, params);
}
public makePutRequest<T, V>(
    uri: string,
    success: SuccessHandler<T>,
    failure: ErrorHandler,
    body?: V
  ) {
    this.makeRequest(uri, RequestType.PUT, success, failure, body);
  }

  public makeDeleteRequest<T, V>(
    uri: string,
    success: SuccessHandler<T>,
    failure: ErrorHandler,
    body?: V
  ) {
    this.makeRequest(uri, RequestType.DELETE, success, failure, body);
  }

  public makePatchRequest<T, V>(
    uri: string,
    success: SuccessHandler<T>,
    failure: ErrorHandler,
    body?: V
  ) {
    this.makeRequest(uri, RequestType.PATCH, success, failure, body);
  }
}

export const ApiClient = new AxiosApiClient();

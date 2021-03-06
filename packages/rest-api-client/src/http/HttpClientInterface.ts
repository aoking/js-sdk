import FormData from "form-data";

export interface HttpClient {
  get: <T extends object>(path: string, params: object) => Promise<T>;
  getData: (path: string, params: object) => Promise<ArrayBuffer>;
  post: <T extends object>(path: string, params: object) => Promise<T>;
  postData: <T extends object>(path: string, params: FormData) => Promise<T>;
  put: <T extends object>(path: string, params: object) => Promise<T>;
  delete: <T extends object>(path: string, params: object) => Promise<T>;
}

export type ErrorResponseData = {
  id: string;
  code: string;
  message: string;
  errors?: any;
};

export type ErrorResponse = {
  data:
    | ErrorResponseData
    | {
        results: Array<ErrorResponseData | {}>;
      };
  status: number;
  headers: any;
};

export interface IResponse {
    message: string;
    data?: any;
}

export interface IError {
    statusCode?: number;
    message: string;
}

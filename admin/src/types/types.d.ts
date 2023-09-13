export type TResponse<T> = {
    result?: T;
    success?: boolean;
    statusCode?: string;
    path?: string
    error?: string;
}
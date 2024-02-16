export type TAuthCredentials = {
    email: string;
    password: string;
}


export interface IFormattedResponse<T> {
    data: T
    statusCode?: number // optional
    status: "success" | "error"
}
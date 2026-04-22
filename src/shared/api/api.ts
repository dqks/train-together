import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

export type ResponseType<D, M extends string | number | symbol> = {
    data: D
    resultCode: number
    messages: Record<M, string[]> | undefined
}

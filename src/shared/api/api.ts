import axios from 'axios';
import { serverUrl } from '@/shared/const/serverUrl.ts';

export const $api = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
});

export type ResponseType<D, M extends string | number | symbol> = {
    data: D
    resultCode: number
    messages: Record<M, string[]> | undefined
}

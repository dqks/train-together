import { setupServer, } from 'msw/node';
import { delay, http, HttpResponse, type HttpHandler, } from 'msw';

const handlers: HttpHandler[] = []

export const server = setupServer(...handlers)

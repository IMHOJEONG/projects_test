import { HttpResponse, http } from 'msw';

export const handlers = [
    http.get('/test', () => {
        
            return HttpResponse.error();

    }),
    http.get('/test1', () => {
        
            return HttpResponse.text('test1');

    }),
    http.get('/test2', () => {
        
            return HttpResponse.text('test2');

    })
]
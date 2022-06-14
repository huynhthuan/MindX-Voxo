import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

export default async function handler(req, res) {
    // Rest of the API logic
    novu.trigger('test', {
        to: {
            subscriberId: '1',
        },
        payload: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjllYWU2ZTNkZTI5ZjAwMWNiNjA0NWEiLCJmaXJzdE5hbWUiOiJodXluaHRodWFuIiwibGFzdE5hbWUiOm51bGwsImVtYWlsIjoiaHV5bmh0aHVhbnZ1Z2lhQGdtYWlsLmNvbSIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQzNTAwNTQ2P3Y9NCIsIm9yZ2FuaXphdGlvbklkIjoiNjI5ZWFlNzczZGUyOWYwMDFjYjYwNDVjIiwicm9sZXMiOlsiYWRtaW4iXSwiZW52aXJvbm1lbnRJZCI6IjYyOWVhZTc3M2RlMjlmMDAxY2I2MDQ1ZSIsImlhdCI6MTY1NDU2NjYzMiwiZXhwIjoxNjU3MTU4NjMyLCJpc3MiOiJub3Z1X2FwaSJ9.0VK5fwJZSyunHJUCtHroTcgJPVSbT-3grhxVvy6Lu9M',
        },
    });
    res.json({ message: 'Hello Everyone!' });
}

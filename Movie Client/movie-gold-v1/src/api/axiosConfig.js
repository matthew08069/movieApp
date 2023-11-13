import axios from 'axios';

export default axios.create({
    baseURL:'https://2f59-2601-588-c082-fd40-a0d9-4d2d-3c4e-9a3c.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
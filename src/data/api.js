import * as axios from 'axios';

const api = axios.create({
    baseURL:
        'https://colors-19f8b-default-rtdb.europe-west1.firebasedatabase.app/',
});

window.api = api;

const colorsApi = {
    async getAll() {
        const response = await api.get('/colors.json');
        return response.data;
    },
    async add(color) {
        const response = await api.post('/colors.json', color);
        return response.data;
    },
    async rate({ id, rating }) {
        const response = await api.put(`/colors/${id}/rating.json`, rating);
        return response.data;
    },
    async remove(id) {
        const response = await api.delete(`/colors/${id}.json`);
        return response.data;
    },
};

export default colorsApi;

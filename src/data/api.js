import * as axios from 'axios';

const api = axios.create({
    baseURL:
        'https://firestore.googleapis.com/v1beta1/projects/colors-19f8b/databases/(default)/documents/',
});

window.api = api;

const objectToDocument = (obj) => {
    const fieldTypes = {
        string: 'stringValue',
        number: 'doubleValue',
        boolean: 'booleanValue',
    };
    const document = {
        fields: {},
    };

    for (let key in obj) {
        const valueType = fieldTypes[typeof obj[key]];
        document.fields[key] = { [valueType]: obj[key] };
    }

    return document;
};

const objectFromDocument = (document) => {
    const fields = document.fields;
    const object = {};

    for (let key in fields) {
        object[key] = Object.values(fields[key])[0];
    }

    return object;
};

const getIdFromDocument = (document) => {
    return document.name.match(/(?<=\/)\w+$/)[0];
};

const colorsApi = {
    async getAll() {
        const response = await api.get('/colors');
        const documents = response.data.documents;

        const colors = documents.map((document) => {
            const id = getIdFromDocument(document);
            const colorData = objectFromDocument(document);

            return { id, ...colorData };
        });

        return colors;
    },
    async add(color) {
        const colorDocument = objectToDocument(color);
        const response = await api.post('/colors', colorDocument);

        const id = getIdFromDocument(response.data);
        return id;
    },
    async rate({ id, rating }) {
        const ratingDocument = objectToDocument({ rating });
        const response = await api.patch(
            `/colors/${id}?updateMask.fieldPaths=rating`,
            ratingDocument
        );
        return response.data.fields;
    },
    async remove(id) {
        const response = await api.delete(`/colors/${id}`);
        return response.data;
    },
};

export default colorsApi;

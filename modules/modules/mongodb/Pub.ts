// models/User.js
import mongoose from 'mongoose';

const PubSchema = new mongoose.Schema({
    "prism:coverDate":{
        type: String,
        required: true,
    },
    "dc:title": {
        type: String,
        required: true,
    },
    "prism:doi": {
        type: String,
        required: true,
    },
    "eid": {
        type: String,
        required: true,
    },
    "prism:publicationName": {
        type: String,
        required: true,
    }
}, {collection: 'publication'});

export default mongoose.models.Pub || mongoose.model('Pub', PubSchema);
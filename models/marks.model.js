import mongoose from 'mongoose';

const markCollection = 'marks';

const markSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: ['cafe', 'cowork', 'restaurant', 'bar', 'other'],
        required: true
    }
});

// Añadir un índice geoespacial al campo location para consultas de proximidad
markSchema.index({ location: '2dsphere' });

const markModel = mongoose.model(markCollection, markSchema);

export default markModel;

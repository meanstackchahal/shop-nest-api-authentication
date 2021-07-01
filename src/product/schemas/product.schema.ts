import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String, 
    description: String,
    price: Number,
    img_url: String,
    created_at: { type: Date, default: Date.now }
})
import { Document } from 'mongoose';

export interface Product extends Document {
    readonly title: string; 
    readonly description: string;
    readonly price: string;
    readonly img_url: string;
    readonly created_at: Date;
}
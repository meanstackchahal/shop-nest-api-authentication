import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){
    }
     
    // fetch all products
    async getAllProduct(): Promise<Product[]> {
        const products = await this.productModel.find().exec();
        return products;
    }
    // Get a single Product
    async getProduct(ProductID): Promise<Product> {
        const Product = await this.productModel.findById(ProductID).exec();
        return Product;
    }
    // post a single Product
    async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = await new this.productModel(createProductDTO);
        return newProduct.save();
    }
    // Edit Product details
    async updateProduct(ProductID, createProductDTO: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel
            .findByIdAndUpdate(ProductID, createProductDTO, { new: true });
        return updatedProduct;
    }
    // Delete a Product
    async deleteProduct(ProductID): Promise<any> {
        const deletedProduct = await this.productModel.findByIdAndRemove(ProductID);
        return deletedProduct;
    }
}


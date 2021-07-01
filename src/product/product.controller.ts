import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){ 
    }

     // add a Product
     @Post('/create')
     async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
         const product = await this.productService.addProduct(createProductDTO);
         return res.status(HttpStatus.OK).json({
             message: "Product has been created successfully",
             product
         })
     }
 
     // Retrieve products list
     @Get('products')
     async getAllProduct(@Res() res) {
         const products = await this.productService.getAllProduct();
         return res.status(HttpStatus.OK).json(products);
     }
 
     // Fetch a particular product using ID
     @Get('product/:productID')
     async getProduct(@Res() res, @Param('productID') productID) {
         const product = await this.productService.getProduct(productID);
         if (!product) throw new NotFoundException('product does not exist!');
         return res.status(HttpStatus.OK).json(product);
     }

      // Update a product's details
    @Put('/update')
    async updateProduct(@Res() res, @Query('productID') productID, @Body() createCustomerDTO: CreateProductDTO) {
        const product = await this.productService.updateProduct(productID, createCustomerDTO);
        if (!product) throw new NotFoundException('product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'product has been successfully updated',
            product
        });
    }

    // Delete a product
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('customerID') customerID) {
        const product = await this.productService.deleteProduct(customerID);
        if (!product) throw new NotFoundException('product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'product has been deleted',
            product
        })
    }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mongouser:Abmstack@3135@cluster1.zzdke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), AuthModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

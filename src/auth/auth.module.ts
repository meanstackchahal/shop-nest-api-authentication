import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schema/user.schema';
import { JwtStrategy } from './strategies/jwt-auth.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [ 
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'SECRET1990',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, JwtStrategy],
  exports: [AuthService]  
})
export class AuthModule {}

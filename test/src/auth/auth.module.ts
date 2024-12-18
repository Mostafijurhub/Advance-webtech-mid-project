import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';  

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', 
      signOptions: { expiresIn: '7d' }, 
    }),
    UserModule, 
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
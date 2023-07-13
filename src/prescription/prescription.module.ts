import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrescriptionController } from './prescription.controller';
import { PrescriptionService } from './prescription.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: '' }),
    JwtModule.register({
      secret: 'secret_key',
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [PrescriptionController],
  providers: [PrescriptionService, AuthService, UserService],
})
export class PrescriptionModule {}

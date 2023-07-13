import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrescriptionModule } from './prescription/prescription.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/database_name', {
    }),
    PrescriptionModule,
  ],
})
export class AppModule {}

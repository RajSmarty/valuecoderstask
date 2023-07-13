import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionDto } from './prescription.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Get(':nhi')
  @UseGuards(AuthGuard('jwt'))
  async searchPrescription(@Param('nhi') nhi: string) {
    return await this.prescriptionService.searchPrescription(nhi);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async addPrescription(@Body() prescription: PrescriptionDto) {
    return await this.prescriptionService.addPrescription(prescription);
  }

  @Put(':nhi')
  @UseGuards(AuthGuard('jwt'))
  async editPrescription(@Param('nhi') nhi: string, @Body() prescription: PrescriptionDto) {
    return await this.prescriptionService.editPrescription(nhi, prescription);
  }
}

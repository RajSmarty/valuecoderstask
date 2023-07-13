import { Injectable } from '@nestjs/common';
import { PrescriptionDto } from './prescription.dto';

@Injectable()
export class PrescriptionService {
  async searchPrescription(nhi: string) {
    
  }

  async addPrescription(prescription: PrescriptionDto) {
    
  }

  async editPrescription(nhi: string, prescription: PrescriptionDto) {
    
  }
}

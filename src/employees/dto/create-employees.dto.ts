export class CreateemployessDto {
    
      documentType: string;
      documentNumber: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      address: string;

      // Información Laboral
      position: string;
      category: string;
      contractType: string;
      contractStartDate: string;
      contractEndDate: string;
    
      // Información de Pago
      baseSalary: number;
      paymentFrequency: string;
      notes: string;
    
      // Auditoría
      createdAt: Date;
      updatedAt: Date;
      createdBy: string;
      updatedBy: string;
    





}


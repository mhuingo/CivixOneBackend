import { Project } from 'src/project/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'tblEmployees' })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  // Información Personal
  @Column({ name: 'documentType', type: 'nvarchar', length: 50 })
  documentType: string;

  @Column({ name: 'documentNumber', type: 'nvarchar', length: 20, unique: true })
  documentNumber: string;

  @Column({ name: 'firstName', type: 'nvarchar', length: 100 })
  firstName: string;

  @Column({ name: 'lastName', type: 'nvarchar', length: 100 })
  lastName: string;

  @Column({ name: 'phone', type: 'nvarchar', length: 20, nullable: true })
  phone: string;

  @Column({ name: 'email', type: 'nvarchar', length: 150, nullable: true })
  email: string;

  @Column({ name: 'address', type: 'nvarchar', nullable: true })
  address: string;

  // Información Laboral
  @Column({ name: 'position', type: 'nvarchar', length: 100 })
  position: string;

  @Column({ name: 'category', type: 'nvarchar', length: 50 })
  category: string;

  @Column({ name: 'contractType', type: 'nvarchar', length: 50 })
  contractType: string;

  @Column({ name: 'contractStartDate', type: 'date' })
  contractStartDate: string;

  @Column({ name: 'contractEndDate', type: 'date', nullable: true })
  contractEndDate: string;

  // Información de Pago
  @Column({ name: 'baseSalary', type: 'decimal', precision: 10, scale: 2 })
  baseSalary: number;

  @Column({ name: 'paymentFrequency', type: 'nvarchar', length: 20 })
  paymentFrequency: string;

  @Column({ name: 'notes', type: 'nvarchar', nullable: true })
  notes: string;

  // Auditoría
  @CreateDateColumn({ name: 'createdAt', type: 'datetime', default: () => 'GETDATE()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'datetime', default: () => 'GETDATE()' })
  updatedAt: Date;

  @Column({ name: 'createdBy', type: 'nvarchar', length: 100, nullable: true })
  createdBy: string;

  @Column({ name: 'updatedBy', type: 'nvarchar', length: 100, nullable: true })
  updatedBy: string;

  @OneToMany(() => Project, (project) => project.employee)
projects: Project[];

}


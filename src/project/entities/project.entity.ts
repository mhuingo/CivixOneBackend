import { Client } from 'src/client/entities/client.entity';
import { Employee } from 'src/employees/entities/employees.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';


@Entity({ name: 'tblProject' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'projectName', type: 'nvarchar', length: 255 })
  projectName: string;

  @ManyToOne(() => Client, (client) => client.projects, { eager: true })
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @ManyToOne(() => Employee, (employee) => employee.projects, { eager: true })
  @JoinColumn({ name: 'employeesId' })
  employee: Employee;

  @Column({ name: 'startDate', type: 'date' })
  startDate: string;

  @Column({ name: 'endDate', type: 'date', nullable: true })
  endDate: string;

  @Column({ name: 'projectCost', type: 'decimal', precision: 12, scale: 2, default: 0.00 })
  projectCost: number;

  @Column({ name: 'currency', type: 'nvarchar', length: 20, default: () => "'PEN'" })
  currency: string;

  @Column({ name: 'status', type: 'nvarchar', length: 50, default: () => "'Planificación'" })
  status: string;

  @Column({ name: 'address', type: 'nvarchar', nullable: true })
  address: string;

  @CreateDateColumn({ name: 'createdAt', type: 'datetime', default: () => 'GETDATE()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'datetime', default: () => 'GETDATE()' })
  updatedAt: Date;

  @Column({ name: 'createdBy', type: 'nvarchar', length: 100, nullable: true })
  createdBy: string;

  @Column({ name: 'updatedBy', type: 'nvarchar', length: 100, nullable: true })
  updatedBy: string;
}

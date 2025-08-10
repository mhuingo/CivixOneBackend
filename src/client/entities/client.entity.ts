import { Project } from 'src/project/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'tblClients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'companyName', type: 'nvarchar', length: 255 })
  companyName: string;

  @Column({ name: 'taxId', type: 'nvarchar', length: 20, unique: true })
  taxId: string;

  @Column({ name: 'address', type: 'nvarchar', nullable: true })
  address: string;

  @Column({ name: 'Contact', type: 'nvarchar', length: 100 })
  contact: string;

  @Column({ name: 'ContactOther', type: 'nvarchar', length: 100, nullable: true })
  contactOther: string;

  @Column({ name: 'phone', type: 'nvarchar', length: 20 })
  phone: string;

  @Column({ name: 'email', type: 'nvarchar', length: 150, nullable: true })
  email: string;

  @Column({ name: 'registrationDate', type: 'datetime' })
  registrationDate: Date;

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

  @OneToMany(() => Project, (project) => project.client)
projects: Project[];


}

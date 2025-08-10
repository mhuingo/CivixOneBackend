import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employees.entity';
import { CreateemployessDto } from './dto/create-employees.dto';
import { promises } from 'dns';
import { UpdateEmployeeDto } from './dto/update-employees.dto';


@Injectable()
export class EmployeesService {

//constructor repository

constructor (
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
){}
async findAll(): Promise<Employee[]>{
  return this.employeeRepository.find();
}
async findOne(id: number): Promise<Employee>{
 const employee = await this.employeeRepository.findOneBy({id: id});
 if(!employee) throw new NotFoundException ('employee no encontrado');
 return employee;
}
async update(id: number, EmployeeDto: UpdateEmployeeDto): Promise<Employee>{
   const employee = await this.findOne(id);
   Object.assign(employee, EmployeeDto);
   return this.employeeRepository.save(employee);
}
async CreateEmployee (EmployeeDto: CreateemployessDto): Promise<Employee>{
    console.log(EmployeeDto);
    const employee = await this.employeeRepository.create(EmployeeDto);
    return this.employeeRepository.save(employee);
}

}










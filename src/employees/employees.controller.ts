import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employees.entity';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { promises } from 'dns';
import { CreateemployessDto } from './dto/create-employees.dto';
import { UpdateEmployeeDto } from './dto/update-employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}


  @Post()
  async create(@Body() employeDto: CreateemployessDto): Promise<Employee>{
    return this.employeesService.CreateEmployee(employeDto);
}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) { 
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto : UpdateEmployeeDto) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }





}

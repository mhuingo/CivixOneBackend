import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { promises } from 'dns';
import { UpdateClientDto } from './dto/update-client.dto';
import { networkInterfaces } from 'os';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ClientService {
  //constructor
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find(); 
  }
  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepository.findOneBy({ id : id });
    if(!client) throw new NotFoundException ('cliente no encontrado');
    return client;
  }

  async update(id: number, clientDto: UpdateClientDto): Promise<Client> {
    const client = await this.findOne(id);
    Object.assign(client, clientDto);
    return this.clientRepository.save(client);
  }

  async CreateClient(ClientDto: CreateClientDto): Promise<Client> {
    console.log(ClientDto);
    const client = await this.clientRepository.create(ClientDto);
    return this.clientRepository.save(client);
  }
}

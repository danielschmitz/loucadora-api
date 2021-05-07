import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ClienteDto } from './cliente.dto';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente) private _clienteRepository: Repository<Cliente>
  ) {

  }

  async create(clienteDto: ClienteDto) : Promise<Cliente> {

    const clienteExiste = await this._clienteRepository.find({email: clienteDto.email})
    if (clienteExiste != undefined) {
      throw new BadRequestException(`Cliente com email '${clienteDto.email}' existente`)
    }

    return await this._clienteRepository.save(clienteDto)
  }

  findAll() : Promise<Cliente[]> {
    return this._clienteRepository.find()
  }

  findOne(id: number) : Promise<Cliente> {
    return this._clienteRepository.findOne(id)
  }

  async update(id: number, clienteDto: ClienteDto): Promise<Cliente> {
    
    const clienteExiste = await this._clienteRepository.find({email: clienteDto.email, id: Not(id)})
    if (clienteExiste != undefined) {
      throw new BadRequestException(`Cliente com email '${clienteDto.email}' existente`)
    }

    const cliente = await this._clienteRepository.findOne(id)
    if (cliente == undefined) {
      throw new NotFoundException();
    }

    return await this._clienteRepository.save(clienteDto)
    
  }

  async remove(id: number) {

    const cliente = await this._clienteRepository.findOne(id)
    if (cliente == undefined) {
      throw new NotFoundException();
    }
    this._clienteRepository.delete(cliente)  
  }
}

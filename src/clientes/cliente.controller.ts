import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clientesService: ClienteService) {}

  @Post()
  create(@Body() clienteDto: ClienteDto) {
    return this.clientesService.create(clienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() clienteDto: ClienteDto) {
    return this.clientesService.update(+id, clienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
